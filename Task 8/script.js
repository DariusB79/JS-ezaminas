/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const Calculator = (e) => {
    e.preventDefault();
    // console.log(e);

    const x = Number(inputX.value);
    const y = Number(inputY.value);
    // resultParagraph.textContent = x + y;

    if (e.submitter.id == "addBtn") {
      resultParagraph.textContent = x + y;
    } else if (e.submitter.id == "subBtn") {
      resultParagraph.textContent = x - y;
    } else if (e.submitter.id == "divBtn") {
      resultParagraph.textContent = x / y;
    } else {
      resultParagraph.textContent = x * y;
    }
  };

  myForm.addEventListener("submit", Calculator);