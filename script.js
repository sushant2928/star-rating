const toggleClassOfStars = (id, isMouseInEvent) => {
  for (let i = 1; i <= id; i++) {
    const star = document.getElementById(i);
    if (isMouseInEvent) {
      star.classList.add("fa-star");
      star.classList.remove("fa-star-o");
    } else {
      star.classList.remove("fa-star");
      star.classList.add("fa-star-o");
    }
  }
};

function Star(el, count, callback) {
  // Write a logic to create star rating problem
  let stars = "";
  for (let i = 1; i <= count; i++) {
    stars = stars + `<i class="fa fa-star-o" id=${i}></i>`;
  }
  const starsContainer = document.querySelector(el);

  const onMouseOut = (event) => {
    toggleClassOfStars(event.target.id, false);
  };

  const onMouseOver = (event) => {
    toggleClassOfStars(event.target.id, true);
  };

  const onMouseClick = (event) => {
    toggleClassOfStars(event.target.id, true);
    starsContainer.removeEventListener("mouseout", onMouseOut);
    starsContainer.removeEventListener("mouseover", onMouseOver);
    starsContainer.removeEventListener("click", onMouseClick);
    callback(event.target.id);
  };

  starsContainer.addEventListener("mouseout", onMouseOut);
  starsContainer.addEventListener("mouseover", onMouseOver);
  starsContainer.addEventListener("click", onMouseClick);

  starsContainer.innerHTML = stars;
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);
