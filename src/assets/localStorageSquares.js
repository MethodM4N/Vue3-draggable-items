const getLocalStorageSquares = () => {
  const data = localStorage.getItem('squares');
  const squares = data ? JSON.parse(data) : '';
  return squares;
};

const setLocalStorageSquares = (value) => {
  const json = JSON.stringify(value);
  localStorage.setItem('squares', json);
};

export { getLocalStorageSquares, setLocalStorageSquares };
