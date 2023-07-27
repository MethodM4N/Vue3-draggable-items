import { onMounted, ref, watch, watchEffect } from 'vue';
import initialSquares from '@/assets/initialSquares.js';
import generateNewSquare from '@/assets/generateNewSquare.js';
import { getLocalStorageSquares, setLocalStorageSquares } from '@/assets/localStorageSquares.js';

export const useSquares = () => {
  const squares = ref([]);

  const addSquare = () => {
    const openSquare = squares.value.findIndex((e) => e === null);
    const newSquare = generateNewSquare();
    squares.value[openSquare] = { ...newSquare };
  };

  const setInitialSquares = () => {
    const localStorageSquares = getLocalStorageSquares();
    localStorageSquares
      ? (squares.value = [...localStorageSquares])
      : (squares.value = [...initialSquares]);
  };

  watch(
    () => squares.value,
    () => {
      setLocalStorageSquares(squares.value);
    },
    { deep: true }
  );

  onMounted(setInitialSquares);

  return { squares, addSquare };
};
