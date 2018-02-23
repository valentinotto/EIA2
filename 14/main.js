var Aufgabe14;
(function (Aufgabe14) {
    /*
    Aufgabe: 14
    Name: Valentin Otto
    Matrikel: 256320
    Datum: 19.01.18
  
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
    var f;
    var bg;
    var b;
    Aufgabe14.end = false;
    window.addEventListener("load", screen1);
    function screen1() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 400, 800);
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.font = "10vh font-bit";
        crc2.fillText("PONG", 60, 300);
        crc2.font = "3vh font-bit";
        crc2.fillText("Click to start", 72, 575);
        crc2.fillRect(128, 125, 75, 15);
        crc2.fillRect(238, 385, 75, 15);
        crc2.fillRect(278, 350, 15, 15);
        canvas.addEventListener("click", screen2);
    }
    function screen2() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        canvas.removeEventListener("click", screen2);
        Aufgabe14.score = 0;
        f = new Aufgabe14.Field(crc2);
        bg = crc2.getImageData(0, 0, 400, 800);
        Aufgabe14.p = new Aufgabe14.Paddle(200);
        Aufgabe14.p.draw(crc2);
        b = new Aufgabe14.Ball(193, 150);
        b.draw(crc2);
        canvas.addEventListener("click", paddleupdate);
        window.setTimeout(animate, 20);
    }
    function paddleupdate(event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        Aufgabe14.p.update(crc2, event.offsetX);
    }
    function animate() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        crc2.putImageData(bg, 0, 0);
        printscore();
        Aufgabe14.p.draw(crc2);
        b.update(crc2);
        if (Aufgabe14.end == false) {
            window.setTimeout(animate, 20);
        }
        if (Aufgabe14.end == true) {
            endscreen();
        }
    }
    function printscore() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        crc2.fillStyle = "white";
        crc2.font = "2.5vh font-bit";
        crc2.fillText("" + Aufgabe14.score, 40, 460);
    }
    function endscreen() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        canvas.removeEventListener("click", paddleupdate);
        crc2.fillStyle = "white";
        crc2.fillRect(40, 240, 320, 320);
        crc2.fillStyle = "black";
        crc2.fillRect(50, 250, 300, 300);
        crc2.fillStyle = "white";
        crc2.fillRect(63, 277, 270, 50);
        crc2.fillStyle = "black";
        crc2.font = "4vh font-bit";
        crc2.fillText("GAME OVER", 70, 320);
        crc2.fillStyle = "white";
        crc2.font = "2.5vh font-bit";
        crc2.fillText("SCORE: " + Aufgabe14.score, 135, 400);
        crc2.font = "2.5vh font-bit";
        crc2.fillText("PLAY AGAIN", 120, 475);
        Aufgabe14.end = false;
        canvas.addEventListener("click", screen2);
    }
})(Aufgabe14 || (Aufgabe14 = {}));
//# sourceMappingURL=main.js.map