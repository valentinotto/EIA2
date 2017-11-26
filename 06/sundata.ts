namespace Aufgabe06 {

  export class Sundata extends Movingshapes {
    x: number;
    y: number;

    constructor (x: number, y: number) {
      super(x,y);
    }

    move() : void {
      if (this.x > 800) {
      this.x = 0;
      }
      this.x += 1;
      this.x += 0.01;
      }

    draw() : void {
        crc2.beginPath();
        crc2.arc(this.x, this.y, 30, 0 * Math.PI, 2.0 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
      }
  }
}
