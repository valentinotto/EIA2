namespace Aufgabe06 {

  export class Skierdata {
    x: number;
    y: number;
    dx: number;
    dy: number;
    headcolor: string;
    outfitcolor: string;

    constructor (x: number, y: number, dx: number, dy: number, headcolor: string, outfitcolor: string) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.headcolor = headcolor;
      this.outfitcolor = outfitcolor;
    }

    move() : void {
      if (this.x < 0 || this.y > 600) {
        this.x = 800;
        this.y = 280;
        this.headcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        this.outfitcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
      }
      this.x -= this.dx;
      this.y += this.dy;
    }

    draw() : void {
      crc2.fillStyle = this.outfitcolor;
      crc2.fillRect(this.x, this.y, 10, -23);
      crc2.fillStyle = this.headcolor;
      crc2.beginPath();
      crc2.arc(this.x+5, this.y-23, 7, 0,2 * Math.PI);
      crc2.fill();
      crc2.stroke();
      crc2.fillStyle = this.headcolor;
      crc2.beginPath();
      crc2.moveTo(this.x+20,this.y-4);
      crc2.lineTo(this.x-20,this.y+4);
      crc2.stroke();
    }

    update():void{
      this.move();
      this.draw();
    }
  }
}
