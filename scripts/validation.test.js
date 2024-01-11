import { validateInput } from "./validation.js";

describe("Testing validation of input", () => {
  it("Should return true if input is not an empty string", () => {
    expect(validateInput("Hello!")).toBe(true);
  });
  it("Should return false if input is empty", () => {
    expect(validateInput("")).toBe(false);
  });
  it("Should return false if input contains English letters and special characters when translation mode is set to Morse to English", () => {
    expect(validateInput("Hello", "Morse")).toBe(false);
    expect(validateInput("How's the weather?", "Morse")).toBe(false);
  });
  it("Should return true if input contains only '.', '-', '/', and ' ' characters when translation mode is set to Morse to English", () => {
    expect(validateInput("... --- ...", "Morse")).toBe(true);
    expect(validateInput("- / .", "Morse")).toBe(true);
  });
  it("Should return false if input contains Morse code signals (except '.', '-', '/', ' ') when translation mode is set to English to Morse", () => {
    expect(validateInput("... --- ...", "English")).toBe(false);
  });
  it("Should return true if input does not contains Morse code signals (except '.', '-', '/', ' ') when translation mode is set to English to Morse", () => {
    expect(validateInput("Hello.")).toBe(true);
    expect(validateInput("How's the weather?")).toBe(true);
  });
});
