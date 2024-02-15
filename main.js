import { drawTile } from "./utils.js";

const canvas = document.getElementById("game");
const c = canvas.getContext("2d");

const spritesheet = document.getElementById("spritesheet");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let scaleFactor = Math.round(canvas.width / canvas.height);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  scaleFactor = Math.round(canvas.width / canvas.height);
});

function draw(deltaTime) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "red";
  c.fillRect(
    400 * scaleFactor,
    400 * scaleFactor,
    100 * scaleFactor,
    100 * scaleFactor
  );
  c.imageSmoothingEnabled = false;
  drawTile(c, spritesheet, 0, 464, 100, 100, 16, 16, 128, 128, scaleFactor);

  window.requestAnimationFrame(draw);
}

draw();
