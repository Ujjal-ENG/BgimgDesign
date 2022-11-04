const bgImgEl = document.getElementById("img");

window.addEventListener("scroll", () => {
  updateImg();
});

const updateImg = () => {
  bgImgEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
};
