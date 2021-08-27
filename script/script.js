//Properties
const mobileBtn = document.getElementById("mobile-cta");
const mobileBtnSkills = document.getElementById("skills-cta");
const mobileBtnProjects = document.getElementById("projects-cta");
const mobileBtnContact = document.getElementById("contact-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");


//Displays mobile menu when hamburgermenu logo is clicked
mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});


//Hides mobile menu when the X img is clicked
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});


//Hides mobile menu depending on which element is clicked in the mobile menu (When Home is pressed the page relodes)
mobileBtnSkills.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

mobileBtnProjects.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

mobileBtnContact.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});


// AM PM Digital clock function
function showDigitalTime() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  } else {
    hour = hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  } else {
    minute = minute;
  }

  if (second < 10) {
    second = "0" + second;
  } else {
    second = second;
  }

  const time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("digital-clock").innerText = time;
  document.getElementById("digital-clock").textContent = time;

  setTimeout(showDigitalTime, 1000);
}

showDigitalTime();
