const notifications = document.querySelector("#noti");
const markRead = document.querySelector(".mark-as-read");
const dots = document.querySelectorAll(".red-dot");
const noti1 = document.querySelector(".noti-1");
const noti2 = document.querySelector(".noti-2");
const noti3 = document.querySelector(".noti-3");

markRead.addEventListener("click", () => {
  notifications.classList.remove("bi-3-square-fill");
  notifications.classList.add("bi-0-square-fill");
  noti1.style.backgroundColor = "white";
  noti2.style.backgroundColor = "white";
  noti3.style.backgroundColor = "white";

  // Iterate over each dot element to hide them
  dots.forEach((dot) => {
    dot.style.display = "none";
  });
});

const dropbtn = document.querySelector(".dropbtn");
const pvtMsg = document.querySelector(".dropdown-content");
const dropbtnIcon = document.querySelector("#dropbtn-icon");

let active = false; // Define active outside the event listener to persist its value

dropbtn.addEventListener("click", () => {
  if (active) {
    pvtMsg.style.display = "none";
    dropbtnIcon.classList.remove("bi-caret-up-fill");
    dropbtnIcon.classList.add("bi-caret-down-fill");
    active = false; // Update active to false when hiding the dropdown
  } else {
    pvtMsg.style.display = "block";
    dropbtnIcon.classList.remove("bi-caret-down-fill");
    dropbtnIcon.classList.add("bi-caret-up-fill");
    active = true; // Update active to true when showing the dropdown
  }
});
