<script>
export default {
  name: 'DeletePopup',
  props: {
    isOpen: {
      type: Boolean
    },
    color: {
      type: String
    },
    index: {
      type: Number
    }
  },
  emits: ['onClose', 'onDelete']
};
</script>

<template>
  <Transition name="right-slide">
    <section v-if="isOpen" class="popup" :class="isOpen && 'popup_opened'">
      <button class="popup__close-button" @click="$emit('onClose')"></button>
      <div class="popup__box" :class="[color ? color : '']"></div>
      <div class="popup__skeleton"></div>
      <button class="popup__delete-button" @click="$emit('onDelete', index)">
        Удалить предмет
      </button>
      <div class="overlay" :class="isOpen && 'overlay_opened'" @click="$emit('onClose')"></div>
    </section>
  </Transition>
</template>

<style scoped lang="scss">
.right-slide-enter-from,
.right-slide-leave-to {
  transform: translateX(150%);
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
  }

  &__box {
    width: 115.56px;
    height: 115.56px;
    background-color: #7faa65;
    margin-bottom: 47px;
  }

  &__skeleton {
    min-width: 211px;
    height: 30px;
    border-radius: 8px;
    background: linear-gradient(0.25turn, #3c3c3c 0%, #444444 50%, #3c3c3c 100%);
    margin-bottom: 181px;
  }

  &__delete-button {
    background-color: #fa7272;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    padding: 11px 56px;
    cursor: pointer;
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
