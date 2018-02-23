namespace Aufgabe14 {

  export class Paddle {
    px: number;

    constructor (x: number) {
      this.px = x;
    }

    setx(x: number) :void {
      this.px = x;
    }

    draw(crc2 : CanvasRenderingContext2D) : void {
      crc2.fillStyle = "white";
      crc2.fillRect(this.px-35,765,70,10);
    }

    update(crc2 : CanvasRenderingContext2D, x : number) : void {
      this.setx(x);
      this.draw(crc2);
    }
  }
}
