/*  __________  Toggle Style Switcher __________ */
const styleSwitcherToggle = document.querySelector(".style_switcher_toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style_switcher").classList.toggle("open");
});

// hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style_switcher").classList.contains("open")) {
    document.querySelector(".style_switcher").classList.remove("open");
  }
});

/*  __________  Theme Colors __________ */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });

  // Save the selected theme to local storage
  localStorage.setItem("SelectedTheme", color);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("SelectedTheme");
  if (savedTheme) {
    setActiveStyle(savedTheme);
  }
}
window.addEventListener("load", initializeTheme);

/*  __________  Theme light & dark __________ */
const dayNight = document.querySelector(".day_night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Save theme preference to local storage
  localStorage.setItem(
    "PageTheme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

window.addEventListener("load", () => {
  // Retrieve theme preference from local storage
  const savedTheme = localStorage.getItem("PageTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
