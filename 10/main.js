var Aufgabe10;
(function (Aufgabe10) {
    // Aufgabe: 10
    // Name: Valentin Otto
    // Matrikel: 256320
    // Datum: 06.01.18
    //
    // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", createhtml);
    window.addEventListener("change", cart);
    var name;
    var street;
    var housenumber;
    var zipcode;
    var city;
    var email;
    var extra;
    function createhtml() {
        var baumtype = document.getElementById("baumart"); //Baumart
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Baumart") {
                var radio1 = document.createElement("input");
                radio1.type = "radio";
                radio1.name = Aufgabe10.data[i].type;
                radio1.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                baumtype.appendChild(radio1);
                var label1 = document.createElement("label");
                label1.id = "label" + i;
                label1.htmlFor = radio1.id;
                label1.innerText = Aufgabe10.data[i].name;
                baumtype.appendChild(label1);
            }
        }
        var größe = document.getElementById("größe"); //Größe
        var slider = document.createElement("input");
        slider.type = "range";
        slider.value = "0";
        slider.id = "Größe";
        slider.min = "0";
        var slidermax = 0;
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Größe") {
                slidermax++;
            }
        }
        slider.max = "" + (slidermax - 1);
        slider.step = "1";
        größe.appendChild(slider);
        var sliderlabelul = document.createElement("ul");
        größe.appendChild(sliderlabelul);
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Größe") {
                var sliderlabel = document.createElement("li");
                sliderlabel.innerText = Aufgabe10.data[i].name;
                sliderlabelul.appendChild(sliderlabel);
            }
        }
        var lichter = document.getElementById("lichter"); //Lichter
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Lichter") {
                var radio3 = document.createElement("input");
                radio3.type = "radio";
                radio3.name = Aufgabe10.data[i].type;
                radio3.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                lichter.appendChild(radio3);
                var label3 = document.createElement("label");
                label3.id = "label" + i;
                label3.htmlFor = radio1.id;
                label3.innerText = Aufgabe10.data[i].name;
                lichter.appendChild(label3);
            }
        }
        var kugeln = document.getElementById("kugeln"); //Kugeln
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Kugeln") {
                var stepper = document.createElement("input");
                var label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = stepper.id;
                label.innerText = Aufgabe10.data[i].name;
                kugeln.appendChild(label);
                stepper.type = "number";
                stepper.value = "0";
                stepper.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                stepper.name = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                stepper.min = "0";
                stepper.max = "10";
                stepper.step = "1";
                kugeln.appendChild(stepper);
                var br = document.createElement("br");
                kugeln.appendChild(br);
            }
        }
        var lametta = document.getElementById("lametta"); //Lametta
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Lametta") {
                var radio4 = document.createElement("input");
                radio4.type = "radio";
                radio4.name = Aufgabe10.data[i].type;
                radio4.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                lametta.appendChild(radio4);
                var label4 = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radio4.id;
                label4.innerText = Aufgabe10.data[i].name;
                lametta.appendChild(label4);
            }
        }
        var stern = document.getElementById("stern"); //Stern
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Stern") {
                var radio5 = document.createElement("input");
                radio5.type = "radio";
                radio5.name = Aufgabe10.data[i].type;
                radio5.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                stern.appendChild(radio5);
                var label5 = document.createElement("label");
                label5.id = "label" + i;
                label5.htmlFor = radio5.id;
                label5.innerText = Aufgabe10.data[i].name;
                stern.appendChild(label5);
            }
        }
        var address = document.getElementById("adresse"); //Form
        name = document.createElement("input");
        name.type = "text";
        name.name = "Name";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        address.appendChild(name);
        street = document.createElement("input");
        street.type = "text";
        street.name = "Straße";
        street.placeholder = "Straße";
        street.pattern = "[a-zA-Z]{1,}";
        street.required = true;
        address.appendChild(street);
        housenumber = document.createElement("input");
        housenumber.type = "text";
        housenumber.name = "Hausnummer";
        housenumber.placeholder = "Hausnummer";
        housenumber.pattern = "[0-9]{1,}";
        housenumber.required = true;
        address.appendChild(housenumber);
        city = document.createElement("input");
        city.type = "text";
        city.name = "Ort";
        city.placeholder = "Ort";
        city.pattern = "[a-zA-Z]{1,}";
        city.required = true;
        address.appendChild(city);
        zipcode = document.createElement("input");
        zipcode.type = "text";
        zipcode.name = "Postleitzahl";
        zipcode.placeholder = "Postleitzahl";
        zipcode.pattern = "[0-9]{5}";
        zipcode.required = true;
        address.appendChild(zipcode);
        email = document.createElement("input");
        email.type = "email";
        email.name = "E-Mail Adresse";
        email.placeholder = "E-Mail";
        email.required = true;
        address.appendChild(email);
        extra = document.createElement("textarea");
        extra.name = "Extrawünsche";
        extra.placeholder = "Extrawünsche";
        extra.cols = 30;
        extra.rows = 3;
        extra.required = true;
        address.appendChild(extra);
        var bezahlmethode = document.getElementById("bezahlmethode"); //Bezahlmethode
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Bezahlmethode") {
                var radio6 = document.createElement("input");
                radio6.type = "radio";
                radio6.name = Aufgabe10.data[i].type;
                radio6.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name + "§" + Aufgabe10.data[i].price;
                bezahlmethode.appendChild(radio6);
                var label6 = document.createElement("label");
                label6.id = "label" + i;
                label6.htmlFor = radio6.id;
                label6.innerText = Aufgabe10.data[i].name;
                bezahlmethode.appendChild(label6);
            }
        }
        var button = document.getElementById("check");
        var submit = document.createElement("input");
        submit.type = "submit";
        button.appendChild(submit);
        var checkout = document.createElement("button");
        checkout.name = "Button";
        checkout.type = "button";
        checkout.innerText = "Bestellung überprüfen";
        checkout.addEventListener("mousedown", check);
        submit.appendChild(checkout);
    }
    function check(event) {
        var button = document.getElementById("check");
        var status = document.createElement("div");
        if (name.checkValidity() == false || street.checkValidity() == false || housenumber.checkValidity() == false || city.checkValidity() == false || zipcode.checkValidity() == false || email.checkValidity() == false) {
            status.innerText = "Check again! - Die Daten deiner Bestellung sind nicht korrekt.";
            status.id = "checkoutstatus";
            button.appendChild(status);
        }
        else {
            status.innerText = "Great job! - Du hast alles richtig gemacht.";
            status.id = "checkoutstatus";
            button.appendChild(status);
        }
    }
    var cartBezahlmethode = ["0"];
    var cartStern = ["0"];
    var cartLametta = ["0"];
    var cartBaumart = ["0"];
    var cartBeleuchtung = ["0"];
    var cartKugeln = [];
    var cartGröße = ["0"];
    function cart(event) {
        var target = event.target;
        var totalprice = 0;
        var inputInfo = target.id.split("§"); //0=type,1=name,2=price
        //console.log(inputInfo, target.value);
        if (inputInfo[0] == "Baumart") {
            cartBaumart[1] = inputInfo[1];
            cartBaumart[0] = inputInfo[2];
        }
        if (inputInfo[0] == "Größe") {
            var größeInt = parseInt(target.value);
            var größeName = [];
            var größePrice = [];
            for (var i = 0; i < Aufgabe10.data.length; i++) {
                if (Aufgabe10.data[i].type == "Größe") {
                    größeName.push(Aufgabe10.data[i].name);
                    größePrice.push(Aufgabe10.data[i].price);
                }
            }
            cartGröße[1] = größeName[größeInt];
            cartGröße[0] = "" + größePrice[größeInt];
        }
        if (inputInfo[0] == "Lichter") {
            cartBeleuchtung[1] = inputInfo[1];
            cartBeleuchtung[0] = inputInfo[2];
        }
        if (inputInfo[0] == "Kugeln") {
            var kugelnName = [];
            for (var i = 0; i < Aufgabe10.data.length; i++) {
                if (Aufgabe10.data[i].type == "Kugeln") {
                    kugelnName.push(Aufgabe10.data[i].name);
                }
            }
            for (var i = 0; i < kugelnName.length; i++) {
                if (kugelnName[i] == inputInfo[1]) {
                    cartKugeln[i] = [inputInfo[1], inputInfo[2], target.value];
                }
            }
        }
        if (inputInfo[0] == "Lametta") {
            cartLametta[1] = inputInfo[1];
            cartLametta[0] = inputInfo[2];
        }
        if (inputInfo[0] == "Stern") {
            cartStern[1] = inputInfo[1];
            cartStern[0] = inputInfo[2];
        }
        if (inputInfo[0] == "Bezahlmethode") {
            cartBezahlmethode[1] = inputInfo[1];
            cartBezahlmethode[0] = inputInfo[2];
        }
        //generate cart
        var basket = document.getElementById("basket");
        basket.style.backgroundColor = "#e6e6e6";
        basket.innerHTML = "<span class='cart'>Warenkorb</span><hr>";
        if (cartBaumart[1] != undefined && cartBaumart[0] != "0") {
            basket.innerHTML += "" + cartBaumart[1] + " " + cartBaumart[0] + "€ <br>";
        }
        if (cartGröße[1] != undefined && cartGröße[0] != "0") {
            basket.innerHTML += cartGröße[1] + " " + cartGröße[0] + "€ <br>";
        }
        if (cartBeleuchtung[1] != undefined && cartBeleuchtung[0] != "0") {
            basket.innerHTML += cartBeleuchtung[1] + " " + cartBeleuchtung[0] + "€ <br>";
        }
        if (cartLametta[1] != undefined && cartLametta[0] != "0") {
            basket.innerHTML += "Lametta " + cartLametta[0] + "€ <br>";
        }
        if (cartStern[1] != undefined && cartStern[0] != "0") {
            basket.innerHTML += "Stern " + cartStern[0] + "€ <br>";
        }
        if (cartBezahlmethode[1] != undefined && cartBezahlmethode[0] != "0") {
            basket.innerHTML += cartBezahlmethode[1] + " " + cartBezahlmethode[0] + "€ <br>";
        }
        totalprice = parseFloat(cartBaumart[0]) + parseFloat(cartGröße[0]) + parseFloat(cartStern[0]) + parseFloat(cartLametta[0]) + parseFloat(cartBezahlmethode[0]) + parseFloat(cartBeleuchtung[0]);
        for (var i = 0; i < cartKugeln.length; i++) {
            if (cartKugeln[i][2] != "0") {
                totalprice += cartKugeln[i][1] * parseInt(cartKugeln[i][2]);
                basket.innerHTML += cartKugeln[i][2] + "X " + cartKugeln[i][0] + " " + cartKugeln[i][1] + "€ <br>";
            }
        }
        basket.innerHTML += "<hr> Gesamtpreis: " + Math.round(totalprice * 100) / 100 + "€";
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map