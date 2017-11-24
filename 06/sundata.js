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
    var Sundata = (function (_super) {
        __extends(Sundata, _super);
        function Sundata(x, y) {
            return _super.call(this, x, y) || this;
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
        return Sundata;
    }(Aufgabe06.Movingshapes));
    Aufgabe06.Sundata = Sundata;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=sundata.js.map