var Aufgabe06;
(function (Aufgabe06) {
    var Skierdata = (function () {
        function Skierdata(x, y, dx, dy, headcolor, outfitcolor) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.headcolor = headcolor;
            this.outfitcolor = outfitcolor;
        }
        Skierdata.prototype.move = function () {
            if (this.x < 0 || this.y > 600) {
                this.x = 800;
                this.y = 280;
                this.headcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                this.outfitcolor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x -= this.dx;
            this.y += this.dy;
        };
        Skierdata.prototype.draw = function () {
            Aufgabe06.crc2.fillStyle = this.outfitcolor;
            Aufgabe06.crc2.fillRect(this.x, this.y, 10, -23);
            Aufgabe06.crc2.fillStyle = this.headcolor;
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = this.headcolor;
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(this.x + 20, this.y - 4);
            Aufgabe06.crc2.lineTo(this.x - 20, this.y + 4);
            Aufgabe06.crc2.stroke();
        };
        Skierdata.prototype.update = function () {
            this.move();
            this.draw();
        };
        return Skierdata;
    }());
    Aufgabe06.Skierdata = Skierdata;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=skierdata.js.map