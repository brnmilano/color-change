const body = document.querySelector("body")
const changeColor = document.querySelector("#change-color")

changeColor.addEventListener("click", () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var cor = 'rgb(' + r + ',' + g + ',' + b + ')';

  console.log({ cor });

  body.style.backgroundColor = cor;
});