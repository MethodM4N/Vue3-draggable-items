<script>
import initialSquares from '@/assets/initialSquares.js';

export default {
  name: 'MainGrid',
  data() {
    return {
      squares: []
    };
  },
  methods: {
    onDragStart(e, square, index) {
      const json = [JSON.stringify(square), JSON.stringify(index)];
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('square', JSON.stringify(json));
    },
    onDrop(e, index) {
      const square = JSON.parse(e.dataTransfer.getData('square'));
      if (JSON.parse(square[0]) !== null) {
        this.squares[square[1]] = null;
        this.squares[index] = JSON.parse(square[0]);
      }
    }
  },
  mounted() {
    this.squares = [...initialSquares];
  }
};
</script>

<template>
  <section class="main-grid">
    <div
      class="squares"
      v-for="(square, index) in squares"
      :key="index"
      @dragstart="onDragStart($event, square, index)"
      draggable="true"
      @drop="onDrop($event, index)"
      @dragenter.prevent
      @dragover.prevent>
      <div class="squares__box" :class="[square ? square.color : '']"></div>
      <div v-if="square" class="squares__numbers">{{ square.count }}</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background-color: #262626;
  overflow: hidden;
}
.squares {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4d4d4d;
  width: 105px;
  height: 100px;

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
