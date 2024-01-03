export const swapDisplayedToTranslateLanguage = (toTranslateLanguage, otherLanguage) => {
  document.querySelector(".translate-order__to-translate-language").innerText = toTranslateLanguage;
  document.querySelector(".translate-order__translated-language").innerText = otherLanguage;
};

export const displayTranslation = (translation) => {
  document.querySelector(".translated__textbox").value = translation;
};

