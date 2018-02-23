var Aufgabe14;
(function (Aufgabe14) {
    /*
    Aufgabe: 14
    Name: Valentin Otto
    Matrikel: 256320
    Datum: 19.01.18
  
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
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