//
// Aufgabe: 06
// Name: Valentin Otto
// Matrikel: 256320
// Datum: 17.11.17
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace Aufgabe06 {

  export let crc2: CanvasRenderingContext2D;
  window.addEventListener("load", init);
  let shape: Movingshapes[] = [];
  let imgData: ImageData;


  function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");

    // Himmel im Hintergrund
    var grd = crc2.createLinearGradient(0,0,0,300);
    var grd2 = crc2.createLinearGradient(0,0,0,300);
    grd.addColorStop(0,"#66e0ff");
    grd.addColorStop(1,"white");
    grd2.addColorStop(0,"#00ffff");
    grd2.addColorStop(1,"white");
    crc2.fillStyle = grd;
    crc2.fillRect(0, 0, 800, 600);

    // Berge
    crc2.moveTo(50, 200);
    crc2.lineTo(112.5, 100);
    crc2.lineTo(175, 200);
    crc2.lineTo(50, 200);
    crc2.closePath();
    crc2.fillStyle = "#9e9e9e";
    crc2.fill();
    crc2.moveTo(250, 200);
    crc2.lineTo(325, 75);
    crc2.lineTo(400, 200);
    crc2.lineTo(250, 200);
    crc2.closePath();
    crc2.fillStyle = "#9e9e9e";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(125, 200);
    crc2.lineTo(200, 25);
    crc2.lineTo(275, 200);
    crc2.lineTo(125, 200);
    crc2.closePath();
    crc2.fillStyle = "#b0b0b0";
    crc2.fill();
    // Hügel
    crc2.beginPath();
    crc2.arc(225, 1000, 820, 1.0*Math.PI ,2*Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    //Hügel 2
    crc2.beginPath();
    crc2.arc(900, 1000, 820, 1.0 * Math.PI, 2.0 * Math.PI);
    crc2.fillStyle = grd2;
    crc2.fill();
    // Schneemann
    //große Kugel
    crc2.beginPath();
    crc2.arc(750, 575, 20, 0 * Math.PI, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();
    // Mittlere Kugel
    crc2.beginPath();
    crc2.arc(750, 540, 15, 0 * Math.PI, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();
    // Kleine Kugel
    crc2.beginPath();
    crc2.arc(750, 515, 10, 0 * Math.PI, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();
    //Arm Rechts
    crc2.moveTo(765, 540);
    crc2.lineTo(785, 525);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();
    //Arm links
    crc2.moveTo(735, 540);
    crc2.lineTo(715, 525);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();
    //Lift
    crc2.fillRect(400, 529, 17, 70);
    crc2.fillRect(750, 180, 17, 70);
    crc2.fillRect(736, 135, 45, 45);
    crc2.fillRect(386, 484, 45, 45);
    //Lift Kabel 1
    crc2.moveTo(390, 488);
    crc2.lineTo(740, 139);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();
    //Lift Kabel 2
    crc2.moveTo(405, 503);
    crc2.lineTo(755, 154);
    crc2.fillStyle = "black";
    crc2.stroke();
    crc2.closePath();

    // Bäume
    for (var i = 1; i < 12; i++) {
      createTree(Math.floor(Math.random()  * (340 - 15 + 1) + 15), Math.floor(Math.random()  * (570 - 250 + 1) + 250), crc2);
    }
    //Sonne    Anstatt der animierten Wolken
    for (let i: number = 0; i < 1; i++) {
      let sun: Sundata = new Sundata (Math.random() * (770 - 360 + 1) + 360, Math.random() * (100 - 30 + 1) + 30);
      shape.push(sun);
    }
    // Schnee
    for (let i: number = 0; i < 500; i++) {
      let snow: Snowdata = new Snowdata (Math.random() * 800, Math.random() * 600);
      shape.push(snow);
    }

    //Skifahrer
    for (let i: number = 0; i < 4; i++) {
      let skier: Skierdata = new Skierdata (800, 280, Math.random() * 1 + 1.5, Math.random() * 2 + 1, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
      shape.push(skier);
    };

    imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    animate();
  }


  function createTree (x : number,y :number ,crc2 : any) : void {
    crc2.fillStyle = "brown";
    crc2.fillRect(x, y, 12, 20);
    crc2.beginPath();
    crc2.moveTo(x-14, y);
    crc2.lineTo(x+26, y);
    crc2.lineTo(x+4, y-60);
    crc2.lineTo(x-14, y);
    crc2.fillStyle = "green";
    crc2.fill();
    crc2.closePath();
  }


  function animate(): void {
    crc2.putImageData(imgData, 0, 0);

    for (let i: number = 0; i < shape.length; i++) {
      let s: Movingshapes = shape[i];
      console.log(shape[i]);
      s.update();
    }
    window.setTimeout(animate, 20);
  }
}
