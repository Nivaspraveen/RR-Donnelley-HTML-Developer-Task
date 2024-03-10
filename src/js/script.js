// Active wheels
const activeWheels = document.querySelectorAll(".wheel-items");

// Add event listener to the document to remove 'active' class when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.matches(".wheel-items")) {
    activeWheels.forEach((wheel) => wheel.classList.remove("active"));
  }
});

// Event listener for each wheel item
activeWheels.forEach((wheel, index) => {
  wheel.addEventListener("click", function (event) {
    event.stopPropagation();
    activeWheels.forEach((w) => {
      if (w !== activeWheels[index]) {
        w.classList.remove("active");
      }
    });

    activeWheels[index].classList.toggle("active");
  });
});

function initSlider() {
  const arrowIcons = document.querySelectorAll(" .icon");
  const wheelList = document.querySelector(" .wheel-list");
  const maxScrollLeft = wheelList.scrollWidth - wheelList.clientWidth;

  arrowIcons.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      //Removing active class functionality
      const currentActive = document.querySelector(".wheel-items.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }

      //Scrolling animation when clicking the arrow icon
      const direction = arrow.id === "scroll-left" ? -1 : 1;
      const scrollAmount = wheelList.clientWidth * direction;
      wheelList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Hide and show arrow icons

    function handleArrowIcons() {
      arrowIcons[0].style.display =
        wheelList.scrollLeft <= 0 ? "none" : "block";
      arrowIcons[1].style.display =
        wheelList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    wheelList.addEventListener("scroll", () => {
      handleArrowIcons();
    });
  });
}

window.addEventListener("load", initSlider);
