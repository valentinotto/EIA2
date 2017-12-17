var Aufgabe09;
(function (Aufgabe09) {
    // Aufgabe: 09
    // Name: Valentin Otto
    // Matrikel: 256320
    // Datum: 13.12.17
    //
    // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", createkeyboard);
    var selectedchar;
    var letterspacepos;
    function createkeyboard() {
        document.addEventListener("keydown", function (event) { charpress(event.code, event.altKey); });
        document.addEventListener("click", function (event) { charclick(event, event.altKey); });
        var keyboard = document.createElement("div");
        keyboard.className = "keyboard";
        var letterspace = document.createElement("div");
        letterspace.className = "letterspace";
        letterspace.addEventListener("click", drawletter);
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
            var node = document.getElementsByClassName("keyboard");
            node.appendChild(div);
        }
    }
    function charpress(code, alt) {
        var char = code.substring(3);
        var color = document.getElementById(char);
        if (alt == false) {
            color.style.color = "fuchsia";
            selectedchar = char;
        }
        else {
            color.style.color = "black";
        }
    }
    function charclick(mouse, alt) {
        var target = mouse.target;
        var char = target.id;
        var charcolor = document.getElementById(char);
        if (alt == false) {
            charcolor.style.color = "fuchsia";
            selectedchar = char;
        }
        else {
            charcolor.style.color = "black";
        }
    }
    function drawletter(mouse) {
        var div = document.createElement("div");
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
        div.addEventListener("click", function (event) { removeletter(event, event.altKey); });
        document.body.appendChild(div);
    }
    function removeletter(mouse, alt) {
        if (alt == true) {
            var char = mouse.target;
            document.body.removeChild(char);
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=DynHTMLLetter.js.map