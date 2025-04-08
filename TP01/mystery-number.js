const randomIntegerInRange = (min = 0, max = 100) => {
  let randVal = Math.random();
  let tempVal = Math.floor(randVal * (max - min + 1));
  return tempVal + min;
};

let mysteryNumber = randomIntegerInRange();
let nbTry = 0;
let htmlTry = document.getElementById("try");

document.getElementById("button").onclick = () => {
  salut();
};

function salut() {
  const guess = parseInt(prompt("Trouve le nombre 😈😈😈😈😈"));
  if (guess === mysteryNumber) {
    alert("Bravo, tu as trouvé le nombre mystère");
    console.log("first");
    setInterval(() => {
      document.querySelector("body").style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      console.log("first");
    }, 100);
  } else {
    if (guess > mysteryNumber) {
      alert("Le nombre mystère est plus petit que " + guess);
    } else {
      alert("Le nombre mystère est plus grand que " + guess);
    }
    nbTry++;
    htmlTry.innerHTML = nbTry;
    salut();
  }
}
