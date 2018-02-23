namespace Aufgabe14 {

  export class Ball {
    x: number;
    y: number;
    speedx: number = 0;
    speedy: number = 4//2 + (1.5 * Math.random());


    constructor (x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    draw(crc2) : void {
      crc2.fillStyle = "yellow";
      crc2.fillRect(this.x,this.y,15,15);
    }

    move():void{
      this.x += this.speedx;
      this.y += this.speedy;

      if (this.x < 10 && this.speedx < 0) {
        this.speedx = -this.speedx;
      }

      if (this.y < 10 && this.speedy < 0) {
        this.speedy = -this.speedy;
        score++;
      }

      if (this.x > 375 && this.speedx > 0) {
        this.speedx = -this.speedx;
      }

      if (this.y > 770 && this.speedy > 0) {
        end = true;
      }

      if (this.y > 750 && this.y < 755 && this.x > (p.px - 35) && this.x < (p.px + 35)){
        this.speedy = -this.speedy;
      }
    }

    update(crc2):void {
      this.move();
      this.draw(crc2);
    }
  }
}
