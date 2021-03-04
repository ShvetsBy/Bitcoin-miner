export function fieldCalc() {
  const size = localStorage.size;
  const yeild = localStorage.yeild;
  const yeildTiles = size * yeild;
  const emptyTiles = size - yeildTiles;
  localStorage.setItem("emptyTiles", emptyTiles);
  localStorage.setItem("yeildTiles", yeildTiles);
}
