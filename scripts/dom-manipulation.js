import { translateToMorse, translateToEnglish } from "./translation.js";
import { validateInput } from "./validation.js";

export const swapDisplayedToTranslateLanguage = (
  toTranslateLanguage,
  otherLanguage
) => {
  document.querySelector(".translate-order__to-translate-language").innerText =
    toTranslateLanguage;
  document.querySelector(".translate-order__translated-language").innerText =
    otherLanguage;
};

export const displayTranslation = () => {
  const input = document.querySelector("#toTranslate").value;
  const toTranslateLanguage = document.querySelector(
    ".translate-order__to-translate-language"
  ).innerText;

  try {
    validateInput(input, toTranslateLanguage);
    let translation;

    console.log("Validated.");

    if (toTranslateLanguage === "English") {
      translation = translateToMorse(input);
    } else {
      translation = translateToEnglish(input);
    }
    document.querySelector(".translated__textbox").value = translation;
  } catch (error) {
    const elementNode = document.querySelector(
      ".to-translate__interaction-area__error-message"
    );
    const textNode = document.createTextNode(error.message);
    elementNode.append(textNode);

    setTimeout(() => {
      elementNode.replaceChildren();
    }, 5000);
  }
};
