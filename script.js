const toggleClassOfStars = (addTill, count) => {
  for (let i = 1; i <= count; i++) {
    const star = document.getElementById(i);

    if (star) {
      if (addTill >= i) {
        star.classList.add("fa-star");
        star.classList.remove("fa-star-o");
      } else {
        star.classList.remove("fa-star");
        star.classList.add("fa-star-o");
      }
    }
  }
};

function Star(el, count, callback) {
  const starsContainer = document.querySelector(el);
  let selectedStarCount = 0;
  for (let i = 1; i <= count; i++) {
    const star = document.createElement("i");
    star.className = "fa fa-star-o";
    star.id = i;
    starsContainer.appendChild(star);
  }

  const onMouseOut = () => {
    toggleClassOfStars(selectedStarCount, count);
  };

  const onMouseOver = (event) => {
    toggleClassOfStars(event.target.id, count);
  };

  const onMouseClick = (event) => {
    selectedStarCount = event.target.id;
    callback(selectedStarCount);
  };

  starsContainer.addEventListener("mouseout", onMouseOut);
  starsContainer.addEventListener("mouseover", onMouseOver);
  starsContainer.addEventListener("click", onMouseClick);
}

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);
