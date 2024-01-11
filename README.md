# Morse Code Translator

Translate English text to Morse code, or Morse code to English; the choice is up to you!

A text-to-audio feature is available for English to Morse code translations.

Currently, this translator does not handle incorrect Morse code input, so be careful when you're entering Morse code for Morse to English translations.

## Task Completion History

### January 11, 2024

- Added unit tests for validation function
- Added additional audio files for Morse code signals for numbers and select special characters (space, comma, forward slash, at sign, period, question mark)
- Added appropriate error messages to show on UI to improve UX

I worked on adding unit tests for validating user input, which ended up making my code increasingly robust against different cases (such as when a user enters Morse code for English to Morse translation). In addition, it put my head to work to improve the UI/UX of this translator, specifically when it came to displaying meaningful error messages to the user. For example, if the translation mode was set to Morse to English and the user entered text with English characters, an error message would appear: "Input contains English characters".

I also grabbed the audio files (from the [same website mentioned previously](https://www.morsecodeclassnet.com/ch9-morse-audio-files/)) of the Morse code signals for the numbers 0 - 9, as well as comma, forward slash, at sign, period, and question mark (I also trimmed them to my desired length using the same online [audio clip trimmer](https://audiotrimmer.com/)). To deal with spaces, I created an audio clip with no sound to keep silences between words consistent. A message would appear next to the audio button if there was a Morse code signal that did not have a corresponding audio file to play, informing the user that the text-to-audio feature is not available for the current translation.

I was able to fix the issue with the placeholder text not vertically aligning to the center - I replaced the text inputs with text areas instead, which should have been used in the first place to accommodate for multi-line text.

### January 10, 2024

- Added unit tests for translation functions

Began adding unit tests, specifically for the `translateToMorse` and `translateToEnglish` functions. These unit tests ensure that correct translations are being done for either translation mode (Morse to English, and vice versa).

### January 5, 2024

- Created mixins for styling shared across multiple HTML elements

'Refactored' styling code via mixins to increase code modularity. I'm still having issues figuring out how to vertically align placeholder text of a text input.

### January 4, 2024

- Added basic text-to-audio feature for Morse code

Another quality-of-life feature I implemented text-to-audio. However, this is currently only available for English to Morse code translation, and works on user input that only contains the English alphabet (no special characters, no space, etc.).

I downloaded the audio files for each English alphabetic character from [this website](https://www.morsecodeclassnet.com/ch9-morse-audio-files/), and trimmed each sound clip to my desired length using an [online audio trimmer](https://audiotrimmer.com/).

I had an issue where the individual audio files of the morse signals were playing all at one when the audio button was clicked, however this was remedied with the help of this [Quora answer](https://www.quora.com/How-do-I-play-audio-one-after-another-in-JavaScript-if-it-is-in-a-for-loop).

### January 3, 2024

- Added Morse code to English translation functionality
- Refactored code and created separate JavaScript files for related functions
- Added copy-to-clipboard feature
- Improved styling to conform to modern webpage effects

Based on feedback from my FakeOS project, I created individual JavaScript documents to house functions based on how they were related to one another. Initially, I had a single `script.js` file containing all of my JavaScript functions, but then moved them into their respective place.

While moving the functions out of `script.js`, I took the liberty of refactoring my code wherever obvious. One of my next short-term goals is to thoroughly review my code to refactor it further and increase its readability.

I also thought about quality-of-life features such as copying to clipboard buttons, and added this function to the webpage with the help of [this W3Schools tutorial](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp).

### January 2, 2024

- Design mockup
- HTML
- Styling
- Begun basic English to Morse code translation functionality

I wanted to start this project off on the right foot, which meant coming up with a design for this web application. I wanted something modern and minimalistic, but still visually appealing. I eventually came up with a design on Figma that used a muted slate blue palette, as I know harsh colours aren't always easy on the eye.

I wrote the foundational HTML markup of the application, completed the majority of the styling, and started the English to Morse code translation feature.
