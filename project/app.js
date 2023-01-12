const menuClose = document.querySelector("#menu-close");
const menuShow = document.querySelector(".menu-btn");
const navLink = document.querySelector(".nav-bar");
const innerCourse = document.querySelectorAll(".course");
const picImg = document.querySelectorAll("img.pic");
const courseImg = document.querySelector("img.course-img");

menuShow.addEventListener("click", () => {
  navLink.style.right = "0px";
});
menuClose.addEventListener("click", () => {
  navLink.style.right = "-220px";
});

innerCourse.forEach((course) => {
  course.addEventListener("click", function () {
    window.location.href = "course-inner.html";
    courseImg.src = picImg.src;
  });
});
