import { translateToMorse, translateToEnglish } from "./translation.js";

export const validateInput = (event) => {
  const input = document.querySelector("#toTranslate").value;

  if (typeof input !== "string") {
    console.warn("Input is not of string type.");
    return false;
  }

  let toTranslateLanguage = document.querySelector(
    ".translate-order__to-translate-language"
  ).innerText;
  toTranslateLanguage === "English"
    ? translateToMorse(input)
    : translateToEnglish(input);

  return true;
};
