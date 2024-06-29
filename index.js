let adviceID = document.getElementById("advice-id");
let adviceText = document.getElementById("advice-text");
let adviceBtn = document.getElementById("advice-btn");

adviceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceID.innerHTML = data.slip.id;
      adviceText.innerHTML = data.slip.advice;
    });
});
