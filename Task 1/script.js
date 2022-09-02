/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const kg = Number(document.querySelector("input[type=text]").value);

  let lb = 0;
  let g = 0;
  let oz = 0;

  lb = kg * 2.2046;
  g = kg / 0.001;
  oz = kg * 35.274;

  document.getElementById("lb").textContent = `Svoris svarais, lb`;
  document.getElementById("lb-res").textContent = lb;

  document.getElementById("g").textContent = `Svoris gramais, g`;
  document.getElementById("g-res").textContent = g;

  document.getElementById("oz").textContent = `Svoris uncijomis, oz`;
  document.getElementById("oz-res").textContent = oz;
});
