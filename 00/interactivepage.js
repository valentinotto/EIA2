function hellofriend() {
    var txt;
    var person = prompt("Sag mir deinen Namen:", "Jeremy Pascal");
    if (person == null || person == "") {
        txt = "Oh schade 😱 Spielverderber";
    }
    else {
        txt = "Hallo " + person + " !  Wie gehts dir heute?";
    }
    document.getElementById("text").innerHTML = txt;
}
//# sourceMappingURL=interactivepage.js.map