namespace Aufgabe14 {
  /*
  Aufgabe: 14
  Name: Valentin Otto
  Matrikel: 256320
  Datum: 19.01.18

  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
  export class Field {
    constructor (crc2) {
      crc2.clearRect(0,0,400,800);
      crc2.fillStyle = "black";
      crc2.fillRect(0,0,400,800);
      crc2.lineWidth = 10;
      crc2.beginPath();
      crc2.setLineDash([10, 10]);
      crc2.moveTo(5,400);
      crc2.lineTo(400, 400);
      crc2.strokeStyle = "white";
      crc2.stroke();
      crc2.closePath();
      crc2.lineWidth = 15;
      crc2.setLineDash([]);
      crc2.beginPath();
      crc2.moveTo(0,0);
      crc2.lineTo(0, 800);
      crc2.stroke();
      crc2.moveTo(0,0);
      crc2.lineTo(400, 0);
      crc2.stroke();
      crc2.moveTo(400,0);
      crc2.lineTo(400, 800);
      crc2.stroke();
      crc2.closePath();
    }
  }
}
