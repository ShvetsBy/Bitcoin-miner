import superagent from "superagent";

export function sentData(name, score, time) {
  superagent
    .post("https://btc-game-be.herokuapp.com/users")
    .send({ name, score, time })
    .then(console.log)
    .catch(console.error);
}
