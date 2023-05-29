let field = document.getElementById("field");
let ball = document.getElementById("ball");

field.addEventListener("click", (event) => {
  let cords = field.getBoundingClientRect();
  let clickX = event.clientX - cords.left;
  let clickY = event.clientY - cords.top;

  let ballX = Math.max(0, Math.min(clickX - 50, cords.width - 100));
  let ballY = Math.max(0, Math.min(clickY - 50, cords.height - 100));

  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
});
