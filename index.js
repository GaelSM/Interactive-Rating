const ratingState = document.querySelector(".rating-state");
const numberContainer = document.querySelector("#numbers");
const ratingStateButton = document.querySelector("#submit");
const changeRating = document.querySelector("#change-rating");
const thankState = document.querySelector(".thanks-state");

numberContainer.addEventListener("click", (event) => {
  changeRating.innerText = event.target.innerText;

  if (event.target.innerText > 0 && event.target.innerText < 6) {
    ratingStateButton.addEventListener("click", () => {
      ratingState.style.display = "none";
      thankState.style.display = "flex";
    });
  }
});
