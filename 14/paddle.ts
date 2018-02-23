namespace Aufgabe14 {
  /*
  Aufgabe: 14
  Name: Valentin Otto
  Matrikel: 256320
  Datum: 19.01.18

  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
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
