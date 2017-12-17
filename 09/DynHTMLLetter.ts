namespace Aufgabe09 {
  // Aufgabe: 09
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 13.12.17
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

  window.addEventListener("load" , createkeyboard);

  var selectedchar : string [] = [];
  var letterspacepos : any;

  function createkeyboard() : void  {
    document.addEventListener("keydown" , (event) => {charpress(event.code, event.altKey)});
    document.addEventListener("click", (event) => {charclick(event, event.altKey)});

    let keyboard: HTMLDivElement = document.createElement("div");
    keyboard.id = "keyboard";


    let letterspace: HTMLDivElement = document.createElement("div");
    letterspace.className = "letterspace";
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
    var letterspaceposlocal = node.getBoundingClientRect();
    console.log(letterspaceposlocal.top, letterspaceposlocal.bottom);
    letterspacepos = letterspaceposlocal;
  }


  function charpress(code : string, alt: boolean) : void {
    var char : string = code.substring(3);
    var color : any = document.getElementById(char);
    if(alt == false){ color.style.color = "fuchsia"; }
    else { color.style.color = "black"; }

    selectedchar.push(char);
    let div : HTMLDivElement = document.createElement("div");
    var node : any = document.getElementById("letterspace");
    node.body.appendChild(div);
    div.id = char + ",";
    //  div.style.marginLeft = letterspacepos -
    if(char == selectedchar[char.length - 1] &&  alt == true) {
  }
}

function charclick(mouse: MouseEvent, alt: boolean) {
  var target: HTMLElement = <HTMLElement>mouse.target;
  var char : string = target.id;
  var color : any = document.getElementById(char);
  if(alt == false) {
    color.style.color = "fuchsia";
    console.log(char);
    selectedchar.push(char);
    console.log(selectedchar);

    let div : HTMLDivElement = document.createElement("div");
    var node : any = document.getElementsByClassName("letterspace");
    node.document.appendChild(div);
    // div.id = char + ",";
    // div.style.marginLeft = `${letterspacepos.top - mouse.pageX}`;
    // div.style.marginLeft = `${letterspacepos.bottom - mouse.pageY}`;
    // if(char == selectedchar[char.length -1] && alt = true) {
    // }
  }
  else { color.style.color = "black"; }
}
}
