import { swapDisplayedToTranslateLanguage } from "./dom-manipulation.js";
import { displayTranslation } from "./dom-manipulation.js";
import { textToAudio } from "./text-to-audio.js";

let toTranslateLanguage = "English";
let otherLanguage = "Morse";

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".to-translate__interaction-area__translate-button")
    .addEventListener("click", displayTranslation);
  document
    .querySelector(".translate-order__swap-button")
    .addEventListener("click", swapToTranslateLanguage);
  document
    .querySelector(".translated__interaction-area__copy-button")
    .addEventListener("click", copyToClipboard);
  document
    .querySelector(".translated__interaction-area__audio-button")
    .addEventListener("click", textToAudio);
});

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const swapToTranslateLanguage = () => {
  if (toTranslateLanguage === "English") {
    toTranslateLanguage = "Morse";
    otherLanguage = "English";
  } else {
    toTranslateLanguage = "English";
    otherLanguage = "Morse";
  }

  document.querySelector("#toTranslate").value = "";
  document.querySelector("#translated").value = "";
  swapDisplayedToTranslateLanguage(toTranslateLanguage, otherLanguage);
};

const copyToClipboard = () => {
  const translation = document.querySelector(".translated__textbox").value;

  if (!translation) {
    return;
  }

  navigator.clipboard.writeText(translation);

  document.querySelector(".translated__interaction-area__message").innerText =
    "Copied!";

  setTimeout(() => {
    document.querySelector(".translated__interaction-area__message").innerText =
      "";
  }, 4000);
};
