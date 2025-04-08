document.querySelector("button").onclick = () => {
  const list = document.getElementById("list");
  let grade = parseInt(prompt("Entrez une note"));
  let li = document.createElement("li");
  li.textContent = grade;
  list.appendChild(li);
  onChange();
};

const onChange = () => {
  const max = document.querySelector("#max td");
  const min = document.querySelector("#min td");
  const avg = document.querySelector("#avg td");
  const b10 = document.querySelector("#b10 td");

  const list = document.getElementById("list");
  const grades = list.querySelectorAll("li");
  let sum = 0;
  let count = 0;
  let count10 = 0;
  grades.forEach((grade) => {
    const val = parseFloat(grade.textContent);
    sum += val;
    count++;
    if (val >= 10) {
      count10++;
    }
  });
  const avgVal = sum / count;
  max.textContent = Math.max(
    ...Array.from(grades, (grade) => parseFloat(grade.textContent))
  );
  min.textContent = Math.min(
    ...Array.from(grades, (grade) => parseFloat(grade.textContent))
  );
  avg.textContent = avgVal;
  b10.textContent = count10;
};
