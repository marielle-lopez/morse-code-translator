// import { translateToMorse, translateToEnglish } from "./translation.js";
import { morseCode } from "./translation.js";

export const validateInput = (input, toTranslateLanguage) => {
  const morseCodeKeys = Object.keys(morseCode).filter(
    (key) => key !== "." && key !== "-" && key !== "/" && key !== " "
  );

  const morseCodeValues = Object.values(morseCode).filter(
    (value) => value !== "." && value !== "-" && value !== "/"
  );

  if (input === "") {
    return false;
  }

  if (
    toTranslateLanguage === "English" &&
    morseCodeValues.some((signal) => input.includes(signal))
  ) {
    return false;
  }

  if (
    toTranslateLanguage === "Morse" &&
    morseCodeKeys.some((character) => input.toUpperCase().includes(character))
  ) {
    return false;
  }

  return true;
};
