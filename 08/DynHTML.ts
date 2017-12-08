namespace Aufgabe08 {

  window.addEventListener("load", main);

  function main () : void {
    var numbersquares : string = prompt("Gewünschte Anzahl der Vierecke   min. 10 | max. 100)");
    var numbersquaresint : number = parseInt(numbersquares);

    var heightsquares : string = prompt("Gewünschte Höhe der Vierecke in px");
    var heightsquaresint : number = parseInt(heightsquares);

    var widthsquares : string = prompt("Gewünschte Breite der Vierecke in px");
    var widthsquaresint : number = parseInt(widthsquares);

    if( numbersquaresint >= 10 && numbersquaresint <= 100) {
      for (var i : number = 0; i < numbersquaresint; i++){
        drawSquare(Math.random() * 500, Math.random() * 500, widthsquaresint, heightsquaresint);
      }
    }
    else {
      alert("Deine Zahl liegt nicht zwischen 10 und 100");
      main();
    }
  }

  function drawSquare(x: number, y: number, width: number, height: number): void {
    let div: HTMLDivElement = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.marginLeft = x + "px";
    div.style.marginTop = y + "px";
    div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    document.body.appendChild(div);
  }
}
