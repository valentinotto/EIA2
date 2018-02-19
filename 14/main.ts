namespace Aufgabe14 {
  /*
  Aufgabe: 14
  Name: Valentin Otto
  Matrikel: 256320
  Datum: 19.01.18

  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */

window.addEventListener("load", screen1);

function screen1() : void {
  let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

  let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

  var grd = crc2.createLinearGradient(0,800,0,0);
  grd.addColorStop(0,"#999");
  grd.addColorStop(1,"white");
  crc2.fillStyle = grd;
  crc2.fillRect(0, 0, 400, 800);
}
}
