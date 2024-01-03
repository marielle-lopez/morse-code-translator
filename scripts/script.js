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

document.querySelector(".to-translate__interaction-area__translate-button").addEventListener("click", validateInput);
document.querySelector(".translate-order__swap-button").addEventListener("click", swapToTranslateLanguage);
