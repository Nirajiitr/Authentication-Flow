const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");
const dropdown = document.querySelector("#dropdown");
const subList = document.querySelector(".sub-list");
const year = document.querySelector("#year")

function handleDropdown() {
  if (window.innerWidth >= 1024) {
  
    dropdown.addEventListener("mouseenter", () => {
      subList.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      subList.style.display = "none";
    });
  } else {
    subList.style.display = "block"; 
  }
}

handleDropdown();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((i) =>
  i.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
  })
);




 


year.innerText =new Date().getFullYear();