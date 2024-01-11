import { morseCode } from "./translation.js";

export const validateInput = (input, toTranslateLanguage) => {
  const morseCodeKeys = Object.keys(morseCode).filter(
    (key) => key !== "." && key !== "-" && key !== "/" && key !== " "
  );

  const morseCodeValues = Object.values(morseCode).filter(
    (value) => value !== "." && value !== "-" && value !== "/"
  );

  if (input === "") {
    throw new Error("Input cannot be empty");
  }

  if (
    toTranslateLanguage === "English" &&
    morseCodeValues.some((signal) => input.includes(signal))
  ) {
    throw new Error("Input contains Morse code signals");
  }

  if (
    toTranslateLanguage === "Morse" &&
    morseCodeKeys.some((character) => input.toUpperCase().includes(character))
  ) {
    throw new Error("Input contains English characters");
  }

  return true;
};
