var Aufgabe06;
(function (Aufgabe06) {
    var Sundata = (function () {
        function Sundata(x, y) {
            this.x = x;
            this.y = y;
        }
        Sundata.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 1;
            this.x += 0.01;
        };
        Sundata.prototype.draw = function () {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y, 30, 0 * Math.PI, 2.0 * Math.PI);
            Aufgabe06.crc2.fillStyle = "yellow";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.closePath();
        };
        Sundata.prototype.update = function () {
            this.move();
            this.draw();
        };
        return Sundata;
    }());
    Aufgabe06.Sundata = Sundata;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=sundata.js.map