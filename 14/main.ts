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

    crc2.fillStyle = "black";
    crc2.fillRect(0, 0, 400, 800);

    crc2.stroke();
    crc2.fillStyle = "white";
    crc2.font = "20vh font-bit";
    crc2.fillText("PONG", 50, 300);
    crc2.font = "6vh font-bit";
    crc2.fillText("Click to start", 50, 360);

  }
}
