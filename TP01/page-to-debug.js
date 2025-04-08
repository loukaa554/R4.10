// ### Script Ã  dÃ©bugger ###

// ### Section 1 ###
document.querySelector("#section1 button")?.addEventListener("click", () => {
  let textS2 = document.querySelector("#section1 p").textContent;

  // On remplace "PHP" par "Node.js" (affichÃ© en gras)
  textS2 = textS2.replace("PHP", "<b>Node.js bien sur le boss</b>");

  document.querySelector("#section1 p").innerHTML = textS2;
});

// Section1-Q1 : Est-ce que l'Ã©vÃ¨nement se dÃ©clenche bien au clic ?
// Section1-Q2 : Pourquoi ce code ne fonctionne pas ?
// => Corriger ce code pour que Ã§a fonctionne comme attendu

// ### Section 2 ###
/**
 * Convertit les degrÃ©s Celsius en degrÃ©s Fahrenheit.
 * (En tout cas, c'est ce qu'elle devrait faire...)
 * @param {numeric} celsius : DegrÃ©s Celsius
 * @returns {numeric} DegrÃ©s Fahrenheit
 */
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

document.querySelector("#section2 button")?.addEventListener("click", () => {
  let degC = document.querySelector("#section2 input").value;

  let degF = celsiusToFahrenheit(parseFloat(degC));

  document.querySelector("#section2 strong").textContent = degF;
});

// Section2-Q1 : Est-ce que l'Ã©vÃ¨nement se dÃ©clenche bien au clic ?
// Section2-Q2 : Pourquoi ce code ne fonctionne pas ?
// => Corriger ce code pour que Ã§a fonctionne comme attendu

/* Pour information :
    - 0Â°C = 32Â°F
    - 2Â°C = 35.6Â°F
    - 15Â°C = 59Â°F
    - 21Â°C = 69.8Â°F
*/
