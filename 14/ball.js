var Aufgabe14;
(function (Aufgabe14) {
    var Ball = (function () {
        function Ball(x, y) {
            this.speedx = 4;
            this.speedy = 3 + (1.5 * Math.random());
            this.x = x;
            this.y = y;
        }
        Ball.prototype.draw = function (crc2) {
            crc2.fillStyle = "yellow";
            crc2.fillRect(this.x, this.y, 15, 15);
        };
        Ball.prototype.move = function () {
            this.x += this.speedx;
            this.y += this.speedy;
            if (this.x < 10 && this.speedx < 0) {
                this.speedx = -this.speedx;
            }
            if (this.y < 10 && this.speedy < 0) {
                this.speedy = -this.speedy;
                Aufgabe14.score++;
            }
            if (this.x > 375 && this.speedx > 0) {
                this.speedx = -this.speedx;
            }
            if (this.y > 770 && this.speedy > 0) {
                Aufgabe14.end = true;
            }
            if (this.y > 750 && this.y < 756 && this.x > (Aufgabe14.p.px - 35) && this.x < (Aufgabe14.p.px + 35)) {
                this.speedy = -this.speedy;
            }
        };
        Ball.prototype.update = function (crc2) {
            this.move();
            this.draw(crc2);
        };
        return Ball;
    }());
    Aufgabe14.Ball = Ball;
})(Aufgabe14 || (Aufgabe14 = {}));
//# sourceMappingURL=ball.js.map