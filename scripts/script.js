let toTranslateLanguage = "English";

const morseCode = {
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
  '"': ".-..-.",
  "$": "...-..-",
  "@": ".--.-.",
  "¿": "..-.-",
  "¡": "--...-"
}

getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
}

validateInput = (event) => {
  let userInput = event.target.parentElement.previousElementSibling.value;

  if (typeof userInput !== "string") {
    console.log("Input isn't of string type.", typeof userInput);
    return;
  } 

  if (toTranslateLanguage === "English") {
    translateToMorse(userInput.toUpperCase());
  } else {
    translateToEnglish(userInput);
  }
};

translateToMorse = (userInput) => {
  let translation = "";
  let characters = userInput.split("");

  characters.map((character) => {
    translation += `${morseCode[character]} `;
  })

  translation = translation.trimEnd();

  console.log(translation);

  displayTranslation(translation);
};

translateToEnglish = (userInput) => {
  let translation = "";
  let signals = userInput.split(" ");

  for (let i = 0; i < signals.length; i++) {
    let translatedSignal = getKeyByValue(morseCode, signals[i]);
    translation += translatedSignal;
  }

  displayTranslation(translation);
};

displayTranslation = (translation) => {
  document.querySelector(".translated__textbox").value = translation;
};

swapToTranslateLanguage = (event) => {
  let otherLanguage = "";

  if (toTranslateLanguage === "English") {
    toTranslateLanguage = "Morse"
    otherLanguage = "English";
  } else {
    toTranslateLanguage = "English"
    otherLanguage = "Morse";
  }

  swapDisplayedToTranslateLanguage(otherLanguage);
};


swapDisplayedToTranslateLanguage = (otherLanguage) => {
  document.querySelector(".translate-order__to-translate-language").innerText = toTranslateLanguage;
  document.querySelector(".translate-order__translated-language").innerText = otherLanguage;
};

document
  .querySelector(".to-translate__interaction-area__translate-button")
  .addEventListener("click", validateInput);

document.querySelector(".translate-order__swap-button").addEventListener("click", swapToTranslateLanguage);