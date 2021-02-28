function Randomize(empty, full) {
  const emptyCells = new Array(empty).fill(0);
  const Cells = new Array(full).fill(1);

  return emptyCells.concat(Cells).sort(() => Math.random() - 0.5);
}

export default Randomize;
