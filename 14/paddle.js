var Aufgabe14;
(function (Aufgabe14) {
    var Paddle = (function () {
        function Paddle(x) {
            this.px = x;
        }
        Paddle.prototype.setx = function (x) {
            this.px = x;
        };
        Paddle.prototype.draw = function (crc2) {
            crc2.fillStyle = "white";
            crc2.fillRect(this.px - 35, 765, 70, 10);
        };
        Paddle.prototype.update = function (crc2, x) {
            this.setx(x);
            this.draw(crc2);
        };
        return Paddle;
    }());
    Aufgabe14.Paddle = Paddle;
})(Aufgabe14 || (Aufgabe14 = {}));
//# sourceMappingURL=paddle.js.map