<script setup>
import DeletePopup from '@/components/DeletePopup.vue';
import { useSquares } from '@/components/MainGrid/hooks/useSquares.js';
import { useDrag } from '@/components/MainGrid/hooks/useDrag.js';
import { useDeletePopup } from '@/components/MainGrid/hooks/useDeletePopup.js';

const { squares, addSquare } = useSquares();

const { onStartIndex, onEnterIndex, onDragStart, onDragEnter, onDragLeave, onDrop, onDragEnd } =
  useDrag(squares);

const {
  isOpenPopup,
  popupSquareValue,
  popupColor,
  popupActiveSquare,
  onSquareClick,
  onPopupClose,
  onPopupDelete,
  onPopupDeleteByValue
} = useDeletePopup(squares);
</script>

<template>
  <section class="main-grid">
    <div
      class="squares"
      v-for="(square, index) in squares"
      :class="[
        onStartIndex === index ? 'squares_on-drag' : '',
        onEnterIndex === index ? 'squares_on-over' : ''
      ]"
      :key="index"
      draggable="true"
      @dragstart="onDragStart($event, square, index)"
      @drop.prevent="onDrop($event, index)"
      @dragenter.prevent="onDragEnter(index)"
      @dragleave="onDragLeave(index)"
      @dragend="onDragEnd()"
      @dragover.prevent>
      <div
        class="squares__box"
        :class="[square ? square.color : '']"
        @click="onSquareClick(square, index)"></div>
      <div v-if="square && onStartIndex !== index" class="squares__numbers">{{ square.count }}</div>
    </div>

    <delete-popup
      :isOpen="isOpenPopup"
      :color="popupColor"
      :index="popupActiveSquare"
      :deleteCount="popupSquareValue"
      @onClose="onPopupClose"
      @onDelete="onPopupDelete"
      @onDeleteByValue="onPopupDeleteByValue" />

    <button @click="addSquare">+</button>
  </section>
</template>

<style scoped lang="scss">
.main-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background-color: #262626;
  overflow: hidden;

  button {
    background-color: transparent;
    border: 1px solid #4d4d4d;
    color: white;
    font-size: 64px;
    padding: 0;
    cursor: pointer;

    &:hover {
      transition: 0.5s ease;
      text-shadow: 0 0 1px #ffffff, 0 0 2px #ffffff, 0 0 3px #ffffff79;
    }
  }
}
.squares {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4d4d4d;
  width: 105px;
  height: 100px;

  &_on-drag {
    border: none;
  }

  &_on-over {
    background-color: #3c3c3c;
  }

  &__numbers {
    align-self: flex-end;
    font-size: 10px;
    color: #ffffff40;
    border: 1px solid #4d4d4d;
    border-top-left-radius: 6px;
    font-weight: 500;
    padding: 2px 4px;
  }

  &__box {
    margin-left: 26px;
    width: 48px;
    height: 48px;
  }

  .green {
    background-color: #7faa65;
    cursor: pointer;
  }

  .yellow {
    background-color: #aa9765;
    cursor: pointer;
  }

  .blue {
    background-color: #656caa;
    cursor: pointer;
  }
}
</style>
