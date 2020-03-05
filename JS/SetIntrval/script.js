const response = document.getElementById('reponse');
let count = 0;
const counter = () => {
  count++;
  response.innerHTML = `<h1>count: ${count}</h1>`;
};
counter();
setInterval(counter, 1000)