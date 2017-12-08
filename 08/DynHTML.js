var Aufgabe08;
(function (Aufgabe08) {
    window.addEventListener("load", main);
    function main() {
        var numbersquares = prompt("Gewünschte Anzahl der Vierecke   min. 10 | max. 100)");
        var numbersquaresint = parseInt(numbersquares);
        var heightsquares = prompt("Gewünschte Höhe der Vierecke in px");
        var heightsquaresint = parseInt(heightsquares);
        var widthsquares = prompt("Gewünschte Breite der Vierecke in px");
        var widthsquaresint = parseInt(widthsquares);
        if (numbersquaresint >= 10 && numbersquaresint <= 100) {
            for (var i = 0; i < numbersquaresint; i++) {
                drawSquare(Math.random() * 500, Math.random() * 500, widthsquaresint, heightsquaresint);
            }
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 10 und 100");
            main();
        }
    }
    function drawSquare(x, y, width, height) {
        var div = document.createElement("div");
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.marginLeft = x + "px";
        div.style.marginTop = y + "px";
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        document.body.appendChild(div);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=DynHTML.js.map