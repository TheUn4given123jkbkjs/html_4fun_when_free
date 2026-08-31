const trainButton = document.getElementById("trainButton");
const train = document.querySelector(".train");

trainButton.addEventListener("click", () => {
    train.classList.toggle("show");
});