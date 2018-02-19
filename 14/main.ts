namespace Aufgabe14 {
window.addEventListener("load", draw);

function draw() : void {
  let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

  let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

// Himmel im Hintergrund
  crc2.fillStyle = "black";
  crc2.fillRect(0, 0, 400, 800);
}
}
