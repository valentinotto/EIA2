namespace Aufgabe09 {
  // Aufgabe: 09
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 13.12.17
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

  window.addEventListener("load" , createkeyboard);

  var selectedchar : string;
  var letterspacepos : any;

  function createkeyboard() : void  {
    document.addEventListener("keydown" , (event) => {charpress(event.code, event.altKey)});
    document.addEventListener("click", (event) => {charclick(event, event.altKey)});

    let keyboard: HTMLDivElement = document.createElement("div");
    keyboard.id = "keyboard";

    let letterspace: HTMLDivElement = document.createElement("div");
    letterspace.className = "letterspace";
    letterspace.addEventListener("click", drawletter);

    document.body.appendChild(keyboard);
    document.body.appendChild(letterspace);

    let alphabet : string [] = [];
    for (let i: number = 65; i <= 90; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    for (let i: number = 0; i < alphabet.length; i++) {
      let div: HTMLDivElement = document.createElement("div");
      div.id = alphabet[i];
      div.innerText = alphabet[i];
      var node : any = document.getElementById("keyboard");
      node.appendChild(div);
    }
  }


  function charpress(code : string, alt: boolean) : void {
    var char : string = code.substring(3);
    var color : any = document.getElementById(char);
    if(alt == false){
      color.style.color = "fuchsia";
      selectedchar = char;
    }
    else { color.style.color = "black"; }
  }


  function charclick(mouse: MouseEvent, alt: boolean) : void {
    var target: HTMLElement = <HTMLElement>mouse.target;
    var char : string = target.id;
    var charcolor : any = document.getElementById(char);
    if(alt == false) {
      charcolor.style.color = "fuchsia";
      selectedchar = char;
    }
    else { charcolor.style.color = "black"; }
  }


  function drawletter (mouse : MouseEvent) : void {

    let div : HTMLDivElement = document.createElement("div");

    div.id = selectedchar;
    div.style.left = mouse.pageX + "px";
    div.style.top = mouse.pageY + "px";
    div.innerText = selectedchar;
    div.style.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    div.style.backgroundColor = "black";
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.textAlign = "center";
    div.style.position = "absolute";
    div.style.margin = "10px";
    div.style.border = "1px solid";
    document.body.appendChild(div);
  }
}
