import { ref, toRaw } from 'vue';

export const useDrag = (squares) => {
  const onStartIndex = ref('');
  const onEnterIndex = ref('');

  const checkSquare = (square) => {
    return square === null ? false : true;
  };
  const onDragStart = (e, square, index) => {
    if (!checkSquare(squares.value[index])) {
      e.preventDefault();
      return;
    }
    onStartIndex.value = index;
    const json = [toRaw(square), toRaw(index)];
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('square', JSON.stringify(json));
  };
  const onDragEnter = (index) => {
    if (squares.value[index] === null || index === onStartIndex.value) {
      onEnterIndex.value = index;
    }
  };
  const onDragLeave = (index) => {
    if (checkSquare(squares.value[index]) && onStartIndex.value !== index) {
      onEnterIndex.value = null;
    }
  };
  const onDrop = (e, index) => {
    const square = JSON.parse(e.dataTransfer.getData('square'));
    if (checkSquare(square[0]) && checkSquare(squares.value[index])) {
      return;
    } else if (checkSquare(square[0])) {
      squares.value[square[1]] = null;
      squares.value[index] = square[0];
    }
  };
  const onDragEnd = () => {
    onEnterIndex.value = null;
    onStartIndex.value = null;
  };

  return { onStartIndex, onEnterIndex, onDragStart, onDragEnter, onDragLeave, onDrop, onDragEnd };
};
