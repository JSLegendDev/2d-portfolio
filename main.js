import { drawTile, getFramesPos } from "./utils.js";

const canvas = document.getElementById("game");
const c = canvas.getContext("2d");

const spritesheet = document.getElementById("spritesheet");

const spritePositions = getFramesPos(39, 30, 16, 16);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let scaleFactor = Math.round(canvas.width) / Math.round(canvas.height);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  scaleFactor = Math.round(canvas.width) / Math.round(canvas.height);
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
  drawTile(
    c,
    spritesheet,
    spritePositions[936].x,
    spritePositions[936].y,
    100,
    100,
    16,
    16,
    128,
    128,
    scaleFactor
  );

  window.requestAnimationFrame(draw);
}

draw();
