let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");
let copydiv = document.querySelector(".copycode");
let rgb1 = "rgb(93, 0, 175)";
let rgb2 = "rgb(0, 16, 80)";

let hexValues = () => {
  let hexVals = "0123456789abcdef";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color = color + hexVals[Math.floor(Math.random() * 16)];
  }
  return color;
};

let handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  button.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copydiv.innerHTML = `background-image: linear gradient(to right, ${rgb1},${rgb2})`;
};

let handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  button2.innerText = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copydiv.innerHTML = `background-image: linear gradient(to right, ${rgb1}, ${rgb2})`;
};
button.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);

copydiv.addEventListener("click", () => {
  navigator.clipboard
    .writeText(copydiv.innerText)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
});
