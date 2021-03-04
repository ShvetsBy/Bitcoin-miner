import superagent from "superagent";

const stat = {
  name: localStorage.name,
  score: localStorage.score,
  time: localStorage.time,
};

request.post("https://btc-game-be.herokuapp.com/users").send({ stat });
