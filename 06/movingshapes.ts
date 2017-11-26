namespace Aufgabe06 {

  export class Movingshapes {
    x: number;
    y: number;


    constructor (x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    move() : void {}
    draw() : void {}

    update() : void {
      this.move();
      this.draw();
    }
  }
}
