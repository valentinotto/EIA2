var Aufgabe09;
(function (Aufgabe09) {
    // Aufgabe: 09
    // Name: Valentin Otto
    // Matrikel: 256320
    // Datum: 13.12.17
    //
    // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", createkeyboard);
    var selectedchar = [];
    var letterspacepos;
    function createkeyboard() {
        document.addEventListener("keydown", function (event) { charpress(event.code, event.altKey); });
        document.addEventListener("click", function (event) { charclick(event, event.altKey); });
        var keyboard = document.createElement("div");
        keyboard.id = "keyboard";
        var letterspace = document.createElement("div");
        letterspace.className = "letterspace";
        document.body.appendChild(keyboard);
        document.body.appendChild(letterspace);
        var alphabet = [];
        for (var i = 65; i <= 90; i++) {
            alphabet.push(String.fromCharCode(i));
        }
        for (var i = 0; i < alphabet.length; i++) {
            var div = document.createElement("div");
            div.id = alphabet[i];
            div.innerText = alphabet[i];
            var node = document.getElementById("keyboard");
            node.appendChild(div);
        }
        var letterspaceposlocal = node.getBoundingClientRect();
        console.log(letterspaceposlocal.top, letterspaceposlocal.bottom);
        letterspacepos = letterspaceposlocal;
    }
    function charpress(code, alt) {
        var char = code.substring(3);
        var color = document.getElementById(char);
        if (alt == false) {
            color.style.color = "fuchsia";
        }
        else {
            color.style.color = "black";
        }
        selectedchar.push(char);
        var div = document.createElement("div");
        var node = document.getElementById("letterspace");
        node.body.appendChild(div);
        div.id = char + ",";
        //  div.style.marginLeft = letterspacepos -
        if (char == selectedchar[char.length - 1] && alt == true) {
        }
    }
    function charclick(mouse, alt) {
        var target = mouse.target;
        var char = target.id;
        var color = document.getElementById(char);
        if (alt == false) {
            color.style.color = "fuchsia";
            console.log(char);
            selectedchar.push(char);
            console.log(selectedchar);
            var div = document.createElement("div");
            var node = document.getElementsByClassName("letterspace");
            node.document.appendChild(div);
            // div.id = char + ",";
            // div.style.marginLeft = `${letterspacepos.top - mouse.pageX}`;
            // div.style.marginLeft = `${letterspacepos.bottom - mouse.pageY}`;
            // if(char == selectedchar[char.length -1] && alt = true) {
            // }
        }
        else {
            color.style.color = "black";
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=DynHTMLLetter.js.map