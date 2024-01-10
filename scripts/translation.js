import { displayTranslation } from "./dom-manipulation.js";
import { getKeyByValue } from "./script.js";

import morseCode from "../data/morseCode.json" assert { type: "json" };

export const translateToMorse = (input) => {
  const characters = input.toUpperCase().split("");

  const translation = characters
    .reduce((string, character) => {
      const signal = morseCode[character];
      return (string += signal + " ");
    }, "")
    .trimEnd();

  displayTranslation(translation);
  return translation;
};

export const translateToEnglish = (input) => {
  let signals = input.split(" ");

  const translation = signals.reduce((string, signal) => {
    const translatedSignal = getKeyByValue(morseCode, signal);
    return (string += translatedSignal);
  }, "");

  displayTranslation(translation);
  return translation;
};
