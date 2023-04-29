window.addEventListener("load", (event) => {
  function setSize() {
    let resize = 1;
    let fitsWidth = document.body.clientWidth / 1440;
    let fitsHeight = fitsWidth * 911 < document.body.clientHeight;
    if (fitsHeight) {
      resize = fitsWidth;
    } else {
      resize = document.body.clientHeight / 911;
    }
    document.body.style.setProperty("--zoom", resize);
  }
  setSize();
  window.addEventListener("resize", (event) => {
    setSize();
  });
  document.querySelector(".toggle").addEventListener("click", () => {
    document.body.classList.toggle("open");
  });
});
