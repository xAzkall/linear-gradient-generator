const input = document.querySelectorAll("input");
const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.body;
const bntRandom = document.querySelector(".btn-random");

const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  h3.textContent = body.style.background + ";";
};

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const randomHexColor = () => {
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();

  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

  return hexColor;
};

bntRandom.addEventListener("click", () => {
  color1.value = randomHexColor();
  color2.value = randomHexColor();

  setGradient();
});

function copyTextToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

h3.addEventListener("click", function () {
  copyTextToClipboard(h3.textContent);
  const copyAlert = h3.parentElement.querySelector(".alert");
  copyAlert.textContent = "TEXT COPIED";
  copyAlert.classList.add("alert-animate");
  setTimeout(() => {
    copyAlert.classList.remove("alert-animate");
  }, 2000);
});
