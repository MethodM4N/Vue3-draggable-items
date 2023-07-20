const data = [
  { color: 'green', count: 4 },
  { color: 'yellow', count: 1 },
  { color: 'blue', count: 5 },
  { color: 'yellow', count: 8 },
  { color: 'blue', count: 1 },
  { color: 'green', count: 4 }
];

const generateNewSquare = () => {
  const randomNumber = Math.floor(Math.random() * 6);
  return data[randomNumber];
};

export default generateNewSquare;
