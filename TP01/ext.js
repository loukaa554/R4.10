setInterval(() => {
  const elements = document.querySelectorAll("div");
  elements = document.querySelector("body");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.transition = "background-color 1s";
    elements[i].style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }
}, 1000);
