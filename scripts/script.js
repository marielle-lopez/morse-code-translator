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

validateInput = (event) => {
  let userInput = event.target.previousElementSibling.value;

  if (typeof userInput !== "string") {
    console.log("Input isn't of string type.");
    return;
  } else {
    translate(userInput.toUpperCase());
  }
};

translate = (userInput) => {
  let translation = "";
  let characters = userInput.split("");

  characters.map((character) => {
    translation += `${morseCode[character]} `;
  })

  translation = translation.trimEnd();

  console.log(translation);

  displayTranslation(translation);
};

displayTranslation = (translation) => {
  document.querySelector(".translated__textbox").value = translation;
};

document
  .querySelector(".to-translate__translate-button")
  .addEventListener("click", validateInput);
