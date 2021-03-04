function Randomize(empty, full) {
  const emptyCells = new Array(empty).fill(0);
  const Cells = new Array(full).fill(1);
  const fieldArr = emptyCells.concat(Cells).sort(() => Math.random() - 0.5);
  return fieldArr;
}

export default Randomize;
