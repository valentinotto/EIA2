var Aufgabe14;
(function (Aufgabe14) {
    window.addEventListener("load", draw);
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        // Himmel im Hintergrund
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 400, 800);
    }
})(Aufgabe14 || (Aufgabe14 = {}));
//# sourceMappingURL=main.js.map