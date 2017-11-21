var Aufgabe06;
(function (Aufgabe06) {
    var Snowdata = (function () {
        function Snowdata(x, y) {
            this.x = x;
            this.y = y;
        }
        Snowdata.prototype.move = function () {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
        };
        Snowdata.prototype.draw = function () {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y, 4, 0 * Math.PI, 2.0 * Math.PI);
            Aufgabe06.crc2.strokeStyle = "#BDBDBD";
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = "white";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.closePath();
        };
        Snowdata.prototype.update = function () {
            this.move();
            this.draw();
        };
        return Snowdata;
    }());
    Aufgabe06.Snowdata = Snowdata;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=snowdata.js.map