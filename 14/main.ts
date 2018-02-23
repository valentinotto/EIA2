namespace Aufgabe14 {
  /*
  Aufgabe: 14
  Name: Valentin Otto
  Matrikel: 256320
  Datum: 19.01.18

  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  */
  let f: Field;
  let bg: ImageData;
  export let p: Paddle;
  let b: Ball;
  export let score: number;
  export let end: boolean = false;

  window.addEventListener("load", screen1);


  function screen1() : void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    crc2.fillStyle = "black";
    crc2.fillRect(0, 0, 400, 800);

    crc2.stroke();
    crc2.fillStyle = "white";
    crc2.font = "10vh font-bit";
    crc2.fillText("PONG", 50, 300);
    crc2.font = "3vh font-bit";
    crc2.fillText("Click to start", 60, 575);

    crc2.fillRect(120,125,75,15);
    crc2.fillRect(230,385,75,15);
    crc2.fillRect(270,350,15,15);
    canvas.addEventListener("click", screen2);
  }


  function screen2() : void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    canvas.removeEventListener("click", screen2);
    score = 0;


    f = new Field(crc2);
    bg = crc2.getImageData(0,0,400,800);
    p = new Paddle(200);
    p.draw(crc2);
    b = new Ball(193, 150);
    b.draw(crc2);
    canvas.addEventListener("click", paddleupdate);
    window.setTimeout(animate, 20);
  }

  function paddleupdate (event: MouseEvent) : void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    p.update(crc2,event.offsetX);
  }

  function animate() : void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    crc2.putImageData(bg,0,0);
    printscore();
    p.draw(crc2);
    b.update(crc2);
    if (end == false) {
      window.setTimeout(animate, 20);
    }
    if (end == true) {
      endscreen();
    }
  }

  function printscore() : void{
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    crc2.fillStyle = "white";
    crc2.font = "2.5vh font-bit";
    crc2.fillText(`${score}`, 40, 460);
  }

  function endscreen() : void{
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    canvas.removeEventListener("click", paddleupdate);
    crc2.fillStyle = "white";
    crc2.fillRect(40, 240, 320, 320);
    crc2.fillStyle = "black";
    crc2.fillRect(50, 250, 300, 300);
    crc2.fillStyle = "white";
    crc2.fillRect(63,277, 270, 50);
    crc2.fillStyle = "black"
    crc2.font = "4vh font-bit";
    crc2.fillText("GAME OVER", 70, 320);
    crc2.fillStyle = "white";
    crc2.font = "2.5vh font-bit";
    crc2.fillText("SCORE: " + score, 135, 400);
    crc2.font = "2.5vh font-bit";
    crc2.fillText("PLAY AGAIN", 120, 475);
    end = false;
    canvas.addEventListener("click", screen2);
  }
}
