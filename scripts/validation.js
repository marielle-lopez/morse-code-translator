import { translateToMorse, translateToEnglish } from "./translation.js";

export const validateInput = (input) => {
  if (typeof input !== "string") {
    console.warn("Input is not of string type.");
    return false;
  }

  // let toTranslateLanguage = document.querySelector(
  //   ".translate-order__to-translate-language"
  // ).innerText;
  // toTranslateLanguage === "English"
  //   ? translateToMorse(input)
  //   : translateToEnglish(input);

  return true;
};
