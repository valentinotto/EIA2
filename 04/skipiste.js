//
// Aufgabe: 04
// Name: Valentin Otto
// Matrikel: 256320
// Datum: 09.11.17
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe04;
(function (Aufgabe04) {
    window.addEventListener("load", init);
    var crc2;
    var snowX = [];
    var snowY = [];
    var sunX = [];
    var sunY = [];
    var imgData;
    var skier = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        // Himmel im Hintergrund
        var grd = crc2.createLinearGradient(0, 0, 0, 300);
        var grd2 = crc2.createLinearGradient(0, 0, 0, 300);
        grd.addColorStop(0, "#66e0ff");
        grd.addColorStop(1, "white");
        grd2.addColorStop(0, "#00ffff");
        grd2.addColorStop(1, "white");
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
        crc2.arc(225, 1000, 820, 1.0 * Math.PI, 2 * Math.PI);
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
            createTree(Math.floor(Math.random() * (340 - 15 + 1) + 15), Math.floor(Math.random() * (570 - 250 + 1) + 250), crc2);
        }
        //Sonne    Anstatt der animierten Wolken
        for (var i_1 = 0; i_1 < 1; i_1++) {
            sunX[i_1] = Math.random() * (770 - 360 + 1) + 360;
            sunY[i_1] = Math.random() * (100 - 30 + 1) + 30;
        }
        // Schnee
        for (var i_2 = 0; i_2 < 500; i_2++) {
            snowX[i_2] = Math.random() * 800;
            snowY[i_2] = Math.random() * 600;
        }
        //Skifahrer
        for (var i_3 = 0; i_3 < 1; i_3++) {
            skier[i_3] = {
                x: 800,
                y: 280,
                headcolor: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                outfitcolor: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createSkier(s) {
        crc2.fillStyle = s.outfitcolor;
        crc2.fillRect(s.x, s.y, 10, -23);
        crc2.fillStyle = s.headcolor;
        crc2.beginPath();
        crc2.arc(s.x + 5, s.y - 23, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = s.headcolor;
        crc2.beginPath();
        crc2.moveTo(s.x + 20, s.y - 4);
        crc2.lineTo(s.x - 20, s.y + 4);
        crc2.stroke();
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
    function createSnowflake(x, y, crc2) {
        crc2.beginPath();
        crc2.arc(x, y, 4, 0 * Math.PI, 2.0 * Math.PI);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
    }
    function createSun(x, y, crc2) {
        crc2.beginPath();
        crc2.arc(x, y, 30, 0 * Math.PI, 2.0 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
    }
    function animate() {
        crc2.putImageData(imgData, 0, 0);
        //Sonne
        for (var i = 0; i < sunX.length; i++) {
            if (sunX[i] > 800) {
                sunX[i] = 0;
            }
            sunX[i] += 1;
            sunY[i] += 0.01;
            createSun(sunX[i], sunY[i], crc2);
        }
        //Schnee
        for (var i = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random();
            createSnowflake(snowX[i], snowY[i], crc2);
        }
        //Skifahrer
        for (var i = 0; i < skier.length; i++) {
            if (skier[i].x < 0 || skier[i].y > 600) {
                skier[i].x = 800;
                skier[i].y = 280;
                skier[i].headcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                skier[i].outfitcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            skier[i].x -= 2;
            skier[i].y += 3;
            createSkier(skier[i]);
            skier[i].x -= 40;
            skier[i].y += 60;
            createSkier(skier[i]);
            skier[i].x += 40;
            skier[i].y -= 60;
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=skipiste.js.map