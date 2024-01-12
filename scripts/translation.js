import { displayTranslation } from "./dom-manipulation.js";
import { getKeyByValue } from "./script.js";

// import morseCode from "../data/morseCode.json" assert { type: "json" };

export const morseCode = {
  " ": "/",
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..---",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "\\": ".-..-.",
  "$": "...-..-",
  "@": ".--.-.",
  "¿": "..-.-",
  "¡": "--...-"
}


export const translateToMorse = (input) => {
  const characters = input.trim().toUpperCase().split("");

  const translation = characters
    .reduce((string, character) => {
      const signal = morseCode[character];
      return (string += signal + " ");
    }, "")
    .trimEnd();

  return translation;
};

export const translateToEnglish = (input) => {
  let signals = input.trim().split(" ");

  const translation = signals.reduce((string, signal) => {
    const translatedSignal = getKeyByValue(morseCode, signal);

    if (translatedSignal === undefined) {
      return string;
    }

    return (string += translatedSignal);
  }, "");

  return translation;
};
