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
    var Snowdata = (function (_super) {
        __extends(Snowdata, _super);
        function Snowdata(x, y) {
            return _super.call(this, x, y) || this;
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
        return Snowdata;
    }(Aufgabe06.Movingshapes));
    Aufgabe06.Snowdata = Snowdata;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=snowdata.js.map