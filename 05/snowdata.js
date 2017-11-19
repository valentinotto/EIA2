var Aufgabe05;
(function (Aufgabe05) {
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
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.arc(this.x, this.y, 4, 0 * Math.PI, 2.0 * Math.PI);
            Aufgabe05.crc2.strokeStyle = "#BDBDBD";
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = "white";
            Aufgabe05.crc2.fill();
            Aufgabe05.crc2.closePath();
        };
        Snowdata.prototype.update = function () {
            this.move();
            this.draw();
        };
        return Snowdata;
    }());
    Aufgabe05.Snowdata = Snowdata;
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=snowdata.js.map