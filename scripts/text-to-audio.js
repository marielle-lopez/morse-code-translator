import { getKeyByValue } from "./script.js";
// import morseCode from "../data/morseCode.json" assert { type: "json" };
import { morseCode } from "./translation.js";

let audioFilePaths;
let audioPointer;
let audio;

const playAudio = () => {
  if (audioPointer < audioFilePaths.length) {
    audio = new Audio(`./resources/audio/${audioFilePaths[audioPointer]}`);
    audio.addEventListener("ended", playAudio);
    audio.play();

    console.log(`Playing: ${audioFilePaths[audioPointer]}`);

    audioPointer++;
  } else {
    console.log("Finished!");
  }
};

export const textToAudio = () => {
  if (document.querySelector("#toTranslate").value === "") {
    return;
  }

  const translation = document.querySelector(".translated__textbox").value;
  const characters = translation.split(" ");

  audioFilePaths = characters.map(
    (character) => `${getKeyByValue(morseCode, character)}.mp3`
  );
  audioPointer = 0;
  playAudio();
};
