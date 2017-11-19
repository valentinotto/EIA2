var Aufgabe05;
(function (Aufgabe05) {
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
            Aufgabe05.crc2.fillStyle = this.outfitcolor;
            Aufgabe05.crc2.fillRect(this.x, this.y, 10, -23);
            Aufgabe05.crc2.fillStyle = this.headcolor;
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            Aufgabe05.crc2.fill();
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = this.headcolor;
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.moveTo(this.x + 20, this.y - 4);
            Aufgabe05.crc2.lineTo(this.x - 20, this.y + 4);
            Aufgabe05.crc2.stroke();
        };
        Skierdata.prototype.update = function () {
            this.move();
            this.draw();
        };
        return Skierdata;
    }());
    Aufgabe05.Skierdata = Skierdata;
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=skierdata.js.map