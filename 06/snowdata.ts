namespace Aufgabe06 {

  export class Snowdata {
    x: number;
    y: number;


    constructor (x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    move() : void {
      if (this.y > 600) {
        this.y = 0;
      }
      this.y += Math.random();
      }

    draw() : void {
      crc2.beginPath();
      crc2.arc(this.x, this.y, 4, 0 * Math.PI, 2.0 * Math.PI);
      crc2.strokeStyle = "#BDBDBD";
      crc2.stroke();
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();
    }

    update():void{
      this.move();
      this.draw();
    }
  }
}
