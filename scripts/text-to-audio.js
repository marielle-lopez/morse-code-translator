import { getKeyByValue } from "./script.js";
// import morseCode from "../data/morseCode.json" assert { type: "json" };
import { morseCode } from "./translation.js";

let audioFilePaths;
let audioPointer;
let audio;

const playAudio = () => {
  const messageElement = document.querySelector(
    ".translated__interaction-area__message"
  );
  messageElement.replaceChildren();

  if (audioPointer < audioFilePaths.length) {
    const textNode = document.createTextNode("Playing...");
    messageElement.append(textNode);

    audio = new Audio(`./resources/audio/${audioFilePaths[audioPointer]}`);
    audio.addEventListener("ended", playAudio);
    audio.play();

    // console.log(`Playing: ${audioFilePaths[audioPointer]}`);

    audioPointer++;
  }
  // else {
  //   console.log("Finished!");
  // }
};

export const textToAudio = () => {
  if (document.querySelector("#toTranslate").value === "") {
    return;
  }

  const input = document.querySelector("#toTranslate").value;

  if (/[^a-zA-Z0-9\s@,.?/]/gi.test(input)) {
    const errorElement = document.querySelector(".translated__interaction-area__message");
    errorElement.replaceChildren();
    const textNode = document.createTextNode("Translation contains special characters the text-to-audio feature does not support")
    errorElement.append(textNode);

    setTimeout(() => {
      errorElement.replaceChildren();
    }, 5000)
    return;
  }

  const characters = input.split("");

  audioFilePaths = characters.map((character) => {
    if (character === ".") {
      return "period.mp3";
    }

    if (character === "?") {
      return "question-mark.mp3";
    }

    if (character === "/") {
      return "forward-slash.mp3";
    }

    if (character === " ") {
      return "space.mp3";
    }

    return `${character.toUpperCase()}.mp3`
  });

  console.log(audioFilePaths)

  audioPointer = 0;
  playAudio();
};
