var Aufgabe06;
(function (Aufgabe06) {
    var Movingshapes = (function () {
        function Movingshapes(x, y) {
            this.x = x;
            this.y = y;
        }
        Movingshapes.prototype.move = function () { };
        Movingshapes.prototype.draw = function () { };
        Movingshapes.prototype.update = function () {
            this.move();
            this.draw();
        };
        return Movingshapes;
    }());
    Aufgabe06.Movingshapes = Movingshapes;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=movingshapes.js.map