<script setup>
import { ref, watch } from 'vue';

const extendedDeleteButton = ref(false);
const inputValue = ref(0);

const props = defineProps({
  isOpen: Boolean,
  color: String,
  index: Number,
  deleteCount: Number
});

const emits = defineEmits(['onClose', 'onDelete', 'onDeleteByValue']);

const onDelete = () => {
  if (props.deleteCount > 1) {
    extendedDeleteButton.value = true;
  } else {
    emits('onDelete', props.index);
  }
};

const onDeleteByValue = () => {
  emits('onDeleteByValue', props.index, inputValue.value);
  extendedDeleteButton.value = false;
};

const isNumber = (event) => {
  if (!/^[0-9]+$/.test(event.key)) {
    return event.preventDefault();
  }
};

watch(
  () => props.deleteCount,
  () => {
    inputValue.value = props.deleteCount;
  }
);
</script>

<template>
  <Transition name="right-slide">
    <section v-if="props.isOpen" class="popup" :class="props.isOpen && 'popup_opened'">
      <button class="popup__close-button" @click="$emit('onClose')"></button>
      <div class="popup__box" :class="[props.color ? props.color : '']"></div>
      <div class="popup__skeleton"></div>
      <div class="popup__skeleton popup__skeleton_2"></div>
      <button class="popup__delete-button" @click="onDelete()">Удалить предмет</button>

      <div class="popup__extended" v-if="extendedDeleteButton">
        <input
          type="text"
          placeholder="Введите количество"
          @keypress="isNumber($event)"
          v-model.number="inputValue" />
        <div>
          <button @click="extendedDeleteButton = false">Отмена</button>
          <button @click="onDeleteByValue()">Подтвердить</button>
        </div>
      </div>

      <div
        class="overlay"
        :class="props.isOpen && 'overlay_opened'"
        @click="$emit('onClose')"></div>
    </section>
  </Transition>
</template>

<style scoped lang="scss">
.right-slide-enter-from,
.right-slide-leave-to {
  transform: translateX(150%);
}

@keyframes skeleton-animation {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(161%);
  }
}

.overlay {
  visibility: hidden;
  position: absolute;
  width: 120%;
  height: 100%;
  top: 0;
  right: 100%;

  &_opened {
    visibility: visible;
  }
}

.popup {
  position: absolute;
  right: 0;
  width: 218px;
  padding: 78px 15px 18px;
  background-color: #26262680;
  border: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.7s ease-in-out;

  &__close-button {
    position: absolute;
    top: 20px;
    right: 14px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    margin-top: -8px;
    width: 12px;
    width: 12px;
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      height: 17px;
      width: 2px;
      background-color: white;
      border-radius: 1px;
      top: 0;
      transform: rotate(45deg);
    }

    &:after {
      position: absolute;
      content: '';
      height: 17px;
      width: 2px;
      background-color: white;
      border-radius: 1px;
      top: 0;
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.6;
      transition: 0.3s ease;
    }
  }

  &__box {
    width: 115.56px;
    height: 115.56px;
    background-color: #7faa65;
    margin-bottom: 47px;
  }

  &__skeleton {
    position: relative;
    min-width: 211px;
    height: 30px;
    border-radius: 8px;
    background-color: #3c3c3c;
    margin-bottom: 30px;

    &_2 {
      height: 15px;
      min-width: 180px;
      margin-bottom: 136px;
    }

    &:after {
      content: '';
      position: absolute;
      width: 38%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        90deg,
        rgba(227, 227, 227, 0) 0%,
        #444444b7 30%,
        #444 50%,
        #444444b7 70%,
        rgba(227, 227, 227, 0) 100%
      );
      animation: skeleton-animation 1.2s linear infinite alternate;
    }
  }

  &__delete-button {
    white-space: nowrap;
    background-color: #fa7272;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    padding: 11px 56px;
    cursor: pointer;

    &:hover {
      transition: 0.3s ease;
      box-shadow: 0 0 7px #fa7272;
      text-shadow: 0 0 1px #ffffff8e, 0 0 2px #ffffff8e;
    }
  }

  &__extended {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 217px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #4d4d4d;
    border-left: 1px solid #4d4d4d;
    border-right: 1px solid #4d4d4d;
    background-color: #26262680;
    backdrop-filter: blur(12px);
    padding: 20px 15px 20px;

    input {
      padding: 12px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
      color: #ffffffc0;
      border: 1px solid #4d4d4d;
      border-radius: 4px;
      background-color: #262626;
      outline: none;
    }

    div {
      display: flex;
      justify-content: space-between;

      button {
        font-size: 14px;
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:first-of-type {
          padding: 8px 19.5px;
          background-color: #fff;
          color: #2d2d2d;

          &:hover {
            transition: 0.3s ease;
            box-shadow: 0 0 4px #fff;
          }
        }

        &:last-of-type {
          padding: 8px 15px;
          background-color: #fa7272;
          color: #ffffff;

          &:hover {
            transition: 0.3s ease;
            box-shadow: 0 0 5px #fa7272;
            text-shadow: 0 0 1px #ffffff8e, 0 0 2px #ffffff8e;
          }
        }
      }
    }
  }
}

.green {
  background-color: #7faa65;
}

.yellow {
  background-color: #aa9765;
}

.blue {
  background-color: #656caa;
}
</style>
