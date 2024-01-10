import { translateToMorse, translateToEnglish } from "../scripts/translation.js";

describe("Testing English to Morse translation", () => {
  it("Should return the correct translation for a given string of English characters", () => {
    expect(translateToMorse("SOS")).toBe("... --- ...");
    expect(translateToMorse("Hello universe!")).toBe(".... . .-.. .-.. --- / ..- -. .. ...- . .-. ... . -.-.--");
    expect(translateToMorse("abc")).toBe(".- -... -.-.");
  });
});

describe("Testing Morse to English translation", () => {
  it("Should return the correct translation for a given string of Morse code signals", () => {
    expect(translateToEnglish("... --- ...")).toBe("SOS");
    expect(translateToEnglish(".---- ..--- ...--")).toBe("123");
    expect(translateToEnglish(".... .. / --. .- .-.. .- -..- -.-- .-.-.-")).toBe("HI GALAXY.");
  })
})