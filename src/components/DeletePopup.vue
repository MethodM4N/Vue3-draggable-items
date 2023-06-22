<script>
export default {
  name: 'DeletePopup',
  props: {
    color: {
      type: String
    },
    index: {
      type: Number
    }
  }
};
</script>

<template>
  <section class="popup">
    <button class="popup__close-button" @click="$emit('onClose')">&#10006;</button>
    <div class="popup__box" :class="[color ? color : '']"></div>
    <div class="popup__skeleton"></div>
    <button class="popup__delete-button" @click="$emit('onDelete', index)">Удалить предмет</button>
  </section>
</template>

<style scoped lang="scss">
.popup {
  position: absolute;
  right: 0;
  padding: 78px 15px 18px;
  background-color: #26262680;
  border: 1px solid #4d4d4d;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__close-button {
    position: absolute;
    top: 14px;
    right: 14px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    margin-top: -8px;
    width: 12px;
    width: 12px;
    cursor: pointer;
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
