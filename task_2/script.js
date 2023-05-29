let darknes = document.getElementById("darknesDiv");
let closemodelbtn = document.getElementById("CloseModelBtn");
let openmodelbtn = document.getElementById("OpenModelBtn");
let modelWindow = document.getElementById("modal_win");

openmodelbtn.addEventListener("click", () => {
  darknes.style.zIndex = 1;
  modelWindow.style.display = "block";
  darknes.style.display = "block";

  console.log("open");
});
closemodelbtn.addEventListener("click", () => {
  darknes.style.zIndex = -1;
  darknes.style.display = "none";
  modelWindow.style.display = "none";
  console.log("close");
});
