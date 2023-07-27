import { ref } from 'vue';

export const useDeletePopup = (squares) => {
  const isOpenPopup = ref(false);
  const popupSquareValue = ref(0);
  const popupColor = ref('');
  const popupActiveSquare = ref(0);

  const onSquareClick = (square, index) => {
    if (square === null) {
      return;
    }
    popupSquareValue.value = square.count;
    popupColor.value = square.color;
    popupActiveSquare.value = index;
    isOpenPopup.value = true;
  };
  const onPopupClose = () => {
    isOpenPopup.value = false;
  };
  const onPopupDelete = (index) => {
    isOpenPopup.value = false;
    squares.value[index] = null;
  };
  const onPopupDeleteByValue = (index, value) => {
    isOpenPopup.value = false;
    squares.value[index].count = squares.value[index].count - value;
    if (squares.value[index].count < 1) {
      squares.value[index] = null;
    }
  };

  return {
    isOpenPopup,
    popupSquareValue,
    popupColor,
    popupActiveSquare,
    onSquareClick,
    onPopupClose,
    onPopupDelete,
    onPopupDeleteByValue
  };
};
