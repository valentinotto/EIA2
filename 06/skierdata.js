var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Aufgabe06;
(function (Aufgabe06) {
    var Skierdata = (function (_super) {
        __extends(Skierdata, _super);
        function Skierdata(x, y, dx, dy, headcolor, outfitcolor) {
            var _this = _super.call(this, x, y) || this;
            _this.dx = dx;
            _this.dy = dy;
            _this.headcolor = headcolor;
            _this.outfitcolor = outfitcolor;
            return _this;
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
        return Skierdata;
    }(Aufgabe06.Movingshapes));
    Aufgabe06.Skierdata = Skierdata;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=skierdata.js.map