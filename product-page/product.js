const body = document.querySelector("body");
const btnFilter = document.querySelector("#filter-btn");
const btnSort = document.querySelector("#sort-btn");
const filterScreen = document.querySelector(".filter-layout-mob");
const sortScreen = document.querySelector(".sort-layout-mob");

btnFilter.addEventListener("click", () => {
  if (filterScreen.style.display === "none") {
    filterScreen.style.display = "flex";
    body.classList.add("noscroll");
  } else {
    filterScreen.style.display = "none";
    body.classList.remove("noscroll");
    sortScreen.style.display = "none";
  }
});

btnSort.addEventListener("click", () => {
  if (sortScreen.style.display === "none") {
    sortScreen.style.display = "flex";
    body.classList.add("noscroll");
  } else {
    sortScreen.style.display = "none";
    body.classList.remove("noscroll");
    filterScreen.style.display = "none";
  }
});
