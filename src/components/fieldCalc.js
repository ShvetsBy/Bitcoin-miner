function fieldCalc(size, yeild) {
  const yeildTiles = size * yeild;
  const emptyTiles = size - yeildTiles;
  localStorage.setItem("emptyTiles", emptyTiles);
  localStorage.setItem("yeildTiles", yeildTiles);
}

export default fieldCalc;
