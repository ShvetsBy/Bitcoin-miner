export async function getdata() {
  const url = `https://btc-game-be.herokuapp.com/users`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

getdata();
