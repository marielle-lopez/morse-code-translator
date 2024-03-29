# Morse Code Translator

## Task Completion History

### January 5, 2023

- Created mixins for styling shared across multiple HTML elements

'Refactored' styling code via mixins to increase code modularity. I'm still having issues figuring out how to vertically align placeholder text of a text input.

### January 4, 2023

- Added basic text-to-audio feature for Morse code

Another quality-of-life feature I implemented text-to-audio. However, this is currently only available for English to Morse code translation, and works on user input that only contains the English alphabet (no special characters, no space, etc.).

I downloaded the audio files for each English alphabetic character from [this website](https://www.morsecodeclassnet.com/ch9-morse-audio-files/), and trimmed each sound clip to my desired length using an [online audio trimmer](https://audiotrimmer.com/).

I had an issue where the individual audio files of the morse signals were playing all at one when the audio button was clicked, however this was remedied with the help of this [Quora answer](https://www.quora.com/How-do-I-play-audio-one-after-another-in-JavaScript-if-it-is-in-a-for-loop).

### January 3, 2023

- Added Morse code to English translation functionality
- Refactored code and created separate JavaScript files for related functions
- Added copy-to-clipboard feature
- Improved styling to conform to modern webpage effects

Based on feedback from my FakeOS project, I created individual JavaScript documents to house functions based on how they were related to one another. Initially, I had a single `script.js` file containing all of my JavaScript functions, but then moved them into their respective place.

While moving the functions out of `script.js`, I took the liberty of refactoring my code wherever obvious. One of my next short-term goals is to thoroughly review my code to refactor it further and increase its readability.

I also thought about quality-of-life features such as copying to clipboard buttons, and added this function to the webpage with the help of [this W3Schools tutorial](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp).

### January 2, 2023

- Design mockup
- HTML
- Styling
- Begun basic English to Morse code translation functionality

I wanted to start this project off on the right foot, which meant coming up with a design for this web application. I wanted something modern and minimalistic, but still visually appealing. I eventually came up with a design on Figma that used a muted slate blue palette, as I know harsh colours aren't always easy on the eye.

I wrote the foundational HTML markup of the application, completed the majority of the styling, and started the English to Morse code translation feature.
