import { swapDisplayedToTranslateLanguage } from "./dom-manipulation.js";
import { validateInput } from "./validation.js";

let toTranslateLanguage = "English";
let otherLanguage = "Morse";

const swapToTranslateLanguage = () => {
  if (toTranslateLanguage === "English") {
    toTranslateLanguage = "Morse";
    otherLanguage = "English";
  } else {
    toTranslateLanguage = "English";
    otherLanguage = "Morse";
  }

  swapDisplayedToTranslateLanguage(toTranslateLanguage, otherLanguage);
};

const copyToClipboard = () => {
  const translation = document.querySelector(".translated__textbox").value;
  navigator.clipboard.writeText(translation);

  document.querySelector(".translated__interaction-area__message").innerText = "Copied!";

  setTimeout(() => {
    document.querySelector(".translated__interaction-area__message").innerText = "";
  }, 4000)
}

document.querySelector(".to-translate__interaction-area__translate-button").addEventListener("click", validateInput);
document.querySelector(".translate-order__swap-button").addEventListener("click", swapToTranslateLanguage);
document.querySelector(".translated__interaction-area__copy-button").addEventListener("click", copyToClipboard);