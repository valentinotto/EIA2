//
// Aufgabe: 06
// Name: Valentin Otto
// Matrikel: 256320
// Datum: 17.11.17
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe06;
(function (Aufgabe06) {
    window.addEventListener("load", init);
    var shape = [];
    var imgData;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe06.crc2 = canvas.getContext("2d");
        // Himmel im Hintergrund
        var grd = Aufgabe06.crc2.createLinearGradient(0, 0, 0, 300);
        var grd2 = Aufgabe06.crc2.createLinearGradient(0, 0, 0, 300);
        grd.addColorStop(0, "#66e0ff");
        grd.addColorStop(1, "white");
        grd2.addColorStop(0, "#00ffff");
        grd2.addColorStop(1, "white");
        Aufgabe06.crc2.fillStyle = grd;
        Aufgabe06.crc2.fillRect(0, 0, 800, 600);
        // Berge
        Aufgabe06.crc2.moveTo(50, 200);
        Aufgabe06.crc2.lineTo(112.5, 100);
        Aufgabe06.crc2.lineTo(175, 200);
        Aufgabe06.crc2.lineTo(50, 200);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.fillStyle = "#9e9e9e";
        Aufgabe06.crc2.fill();
        Aufgabe06.crc2.moveTo(250, 200);
        Aufgabe06.crc2.lineTo(325, 75);
        Aufgabe06.crc2.lineTo(400, 200);
        Aufgabe06.crc2.lineTo(250, 200);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.fillStyle = "#9e9e9e";
        Aufgabe06.crc2.fill();
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(125, 200);
        Aufgabe06.crc2.lineTo(200, 25);
        Aufgabe06.crc2.lineTo(275, 200);
        Aufgabe06.crc2.lineTo(125, 200);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.fillStyle = "#b0b0b0";
        Aufgabe06.crc2.fill();
        // Hügel
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.arc(225, 1000, 820, 1.0 * Math.PI, 2 * Math.PI);
        Aufgabe06.crc2.fillStyle = "white";
        Aufgabe06.crc2.fill();
        //Hügel 2
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.arc(900, 1000, 820, 1.0 * Math.PI, 2.0 * Math.PI);
        Aufgabe06.crc2.fillStyle = grd2;
        Aufgabe06.crc2.fill();
        // Schneemann
        //große Kugel
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.arc(750, 575, 20, 0 * Math.PI, 2 * Math.PI);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        // Mittlere Kugel
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.arc(750, 540, 15, 0 * Math.PI, 2 * Math.PI);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        // Kleine Kugel
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.arc(750, 515, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        //Arm Rechts
        Aufgabe06.crc2.moveTo(765, 540);
        Aufgabe06.crc2.lineTo(785, 525);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        //Arm links
        Aufgabe06.crc2.moveTo(735, 540);
        Aufgabe06.crc2.lineTo(715, 525);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        //Lift
        Aufgabe06.crc2.fillRect(400, 529, 17, 70);
        Aufgabe06.crc2.fillRect(750, 180, 17, 70);
        Aufgabe06.crc2.fillRect(736, 135, 45, 45);
        Aufgabe06.crc2.fillRect(386, 484, 45, 45);
        //Lift Kabel 1
        Aufgabe06.crc2.moveTo(390, 488);
        Aufgabe06.crc2.lineTo(740, 139);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        //Lift Kabel 2
        Aufgabe06.crc2.moveTo(405, 503);
        Aufgabe06.crc2.lineTo(755, 154);
        Aufgabe06.crc2.fillStyle = "black";
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.closePath();
        // Bäume
        for (var i = 1; i < 12; i++) {
            createTree(Math.floor(Math.random() * (340 - 15 + 1) + 15), Math.floor(Math.random() * (570 - 250 + 1) + 250), Aufgabe06.crc2);
        }
        //Sonne    Anstatt der animierten Wolken
        for (var i_1 = 0; i_1 < 1; i_1++) {
            var sun = new Aufgabe06.Sundata(Math.random() * (770 - 360 + 1) + 360, Math.random() * (100 - 30 + 1) + 30);
            shape.push(sun);
        }
        // Schnee
        for (var i_2 = 0; i_2 < 500; i_2++) {
            var snow = new Aufgabe06.Snowdata(Math.random() * 800, Math.random() * 600);
            shape.push(snow);
        }
        //Skifahrer
        for (var i_3 = 0; i_3 < 4; i_3++) {
            var skier = new Aufgabe06.Skierdata(800, 280, Math.random() * 1 + 1.5, Math.random() * 2 + 1, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            shape.push(skier);
        }
        ;
        imgData = Aufgabe06.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createTree(x, y, crc2) {
        crc2.fillStyle = "brown";
        crc2.fillRect(x, y, 12, 20);
        crc2.beginPath();
        crc2.moveTo(x - 14, y);
        crc2.lineTo(x + 26, y);
        crc2.lineTo(x + 4, y - 60);
        crc2.lineTo(x - 14, y);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();
    }
    function animate() {
        Aufgabe06.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < shape.length; i++) {
            var s = shape[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=skipiste.js.map