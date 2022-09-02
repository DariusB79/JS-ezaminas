/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

console.log("Grazintas objekto key masyvas")

function showObjectKeys(audi) {
  mas = [];
  i = 0;
  Object.keys(audi).forEach((key) => {
    mas[i] = key;
    i++;
  });
  return mas;
}

console.log("key reiksmiu masyvas", showObjectKeys(audi));
