import { translateToMorse, translateToEnglish } from "./translation.js";
import { validateInput } from "./validation.js";

export const swapDisplayedToTranslateLanguage = (toTranslateLanguage, otherLanguage) => {
  document.querySelector(".translate-order__to-translate-language").innerText = toTranslateLanguage;
  document.querySelector(".translate-order__translated-language").innerText = otherLanguage;
};

export const displayTranslation = () => {
  const input = document.querySelector("#toTranslate").value;

  if (validateInput(input)) {
    const toTranslateLanguage = document.querySelector(".translate-order__to-translate-language").innerText;

    let translation;

    if (toTranslateLanguage === "English") {
      translation = translateToMorse(input);
    } else {
      translation = translateToEnglish(input);
    }
    document.querySelector(".translated__textbox").value = translation;
  }
};

