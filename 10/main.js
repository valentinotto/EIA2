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
        var baumtype = document.getElementById("baumart");
        var form = document.createElement("form");
        var select = document.createElement("select");
        select.id = "selectBaumart";
        baumtype.appendChild(select);
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Baumart") {
                var option = document.createElement("option");
                option.innerText = Aufgabe10.data[i].name;
                option.id = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name;
                select.appendChild(option);
            }
        }
        var größe = document.getElementById("größe");
        var slider = document.createElement("input");
        slider.type = "range";
        slider.value = "1";
        slider.id = "Größe";
        slider.min = "1";
        var slidermax = 0;
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Größe") {
                slidermax++;
            }
        }
        slider.max = "" + slidermax;
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
        var lichter = document.getElementById("lichter");
        var select2 = document.createElement("select");
        select2.id = "selectLichter";
        lichter.appendChild(select2);
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Lichter") {
                var option2 = document.createElement("option");
                option2.innerText = Aufgabe10.data[i].name;
                option2.id = "option2." + i;
                select2.appendChild(option2);
            }
        }
        var kugeln = document.getElementById("kugeln");
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Kugeln") {
                var check1 = document.createElement("input");
                check1.type = "checkbox";
                check1.value = "check";
                check1.id = "check1" + i;
                kugeln.appendChild(check1);
                var label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = check1.id;
                label.innerText = Aufgabe10.data[i].name;
                kugeln.appendChild(label);
                var stepper = document.createElement("input");
                stepper.type = "number";
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.name = Aufgabe10.data[i].type + "§" + Aufgabe10.data[i].name;
                stepper.min = "0";
                stepper.max = "10";
                stepper.step = "1";
                kugeln.appendChild(stepper);
                var br = document.createElement("br");
                kugeln.appendChild(br);
            }
        }
        var lametta = document.getElementById("lametta");
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Lametta") {
                var radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "radiogroup";
                radio.value = "radio" + i;
                radio.id = "radio1" + i;
                lametta.appendChild(radio);
                var label2 = document.createElement("label");
                label2.id = "label" + i;
                label2.htmlFor = radio.id;
                label2.innerText = Aufgabe10.data[i].name;
                lametta.appendChild(label2);
            }
        }
        var stern = document.getElementById("stern");
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Stern") {
                var radio2 = document.createElement("input");
                radio2.type = "radio";
                radio2.name = "radiogroup2";
                radio2.value = "radio" + i;
                radio2.id = "radio2" + i;
                stern.appendChild(radio2);
                var label3 = document.createElement("label");
                label3.id = "label" + i;
                label3.htmlFor = radio.id;
                label3.innerText = Aufgabe10.data[i].name;
                stern.appendChild(label3);
            }
        }
        var address = document.getElementById("adresse");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DataName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        address.appendChild(name);
        street = document.createElement("input");
        street.type = "text";
        street.name = "DataStreet";
        street.placeholder = "Straße";
        street.pattern = "[a-zA-Z]{1,}";
        street.required = true;
        address.appendChild(street);
        housenumber = document.createElement("input");
        housenumber.type = "text";
        housenumber.name = "DataHousenumber";
        housenumber.placeholder = "Hausnummer";
        housenumber.pattern = "[0-9]{1,}";
        housenumber.required = true;
        address.appendChild(housenumber);
        city = document.createElement("input");
        city.type = "text";
        city.name = "DataCity";
        city.placeholder = "Ort";
        city.pattern = "[a-zA-Z]{1,}";
        city.required = true;
        address.appendChild(city);
        zipcode = document.createElement("input");
        zipcode.type = "text";
        zipcode.name = "DataZipcode";
        zipcode.placeholder = "Postleitzahl";
        zipcode.pattern = "[0-9]{5}";
        zipcode.required = true;
        address.appendChild(zipcode);
        email = document.createElement("input");
        email.type = "email";
        email.name = "DataEmail";
        email.placeholder = "E-Mail";
        email.required = true;
        address.appendChild(email);
        extra = document.createElement("textarea");
        extra.name = "DataExtras";
        extra.placeholder = "Extrawünsche";
        extra.cols = 30;
        extra.rows = 3;
        extra.required = true;
        address.appendChild(extra);
        var bezahlmethode = document.getElementById("bezahlmethode");
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Bezahlmethode") {
                var radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "radiogroup3";
                radio.value = "radio" + i;
                radio.id = "radio3" + i;
                bezahlmethode.appendChild(radio);
                var label3 = document.createElement("label");
                label3.id = "label" + i;
                label3.htmlFor = radio.id;
                label3.innerText = Aufgabe10.data[i].name;
                bezahlmethode.appendChild(label3);
            }
        }
        var button = document.getElementById("check");
        var checkout = document.createElement("button");
        checkout.name = "Button";
        checkout.type = "button";
        checkout.innerText = "Bestellung überprüfen";
        checkout.addEventListener("mousedown", check);
        button.appendChild(checkout);
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
    var cartBezahlmethode = [];
    var cartStern = [];
    var cartLametta = [];
    var cartBaumart = [];
    var cartBeleuchtung = [];
    var cartKugeln = [];
    var cartGröße = [];
    function cart(event) {
        var inputs = [].slice.call(document.querySelectorAll('input'));
        inputs.forEach(function (input) { console.log(input.id, input.name, input.value); });
        var target = event.target;
        var stepper = [];
        var checkBoxes = [];
        var totalprice = 0;
        for (var i = 0; i < Aufgabe10.data.length; i++) {
            if (Aufgabe10.data[i].type == "Kugeln") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check1" + i);
            }
            if (target.value == Aufgabe10.data[i].name && target.id == "selectBaumart") {
                cartBaumart[0] = Aufgabe10.data[i].name;
                cartBaumart[1] = "" + Aufgabe10.data[i].price;
            }
            if (target.id == "Größe") {
                var größeint = parseInt(target.value);
                cartGröße[0] = Aufgabe10.data[(i + größeint - 1)].name;
                cartGröße[1] = "" + Aufgabe10.data[(i + größeint - 1)].price;
            }
            if (target.id == "radio1" + i) {
                cartLametta[0] = Aufgabe10.data[i].name;
                cartLametta[1] = "" + Aufgabe10.data[i].price;
            }
            if (target.id == "radio2" + i) {
                cartStern[0] = Aufgabe10.data[i].name;
                cartStern[1] = "" + Aufgabe10.data[i].price;
            }
            if (target.id == "radio3" + i) {
                cartBezahlmethode[0] = Aufgabe10.data[i].name;
                cartBezahlmethode[1] = "" + Aufgabe10.data[i].price;
            }
            if (target.value == Aufgabe10.data[i].name && target.id == "selectLichter") {
                cartBeleuchtung[0] = Aufgabe10.data[i].name;
                cartBeleuchtung[1] = "" + Aufgabe10.data[i].price;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                cartKugeln[i] = [Aufgabe10.data[i].name, "" + (Aufgabe10.data[i].price * parseInt(stepper[i].value))];
            }
        }
        var basket = document.getElementById("basket");
        basket.style.width = "25%";
        basket.style.height = "auto";
        basket.style.backgroundColor = "#0B610B";
        basket.innerHTML = "<span class='cart'>Warenkorb</span><hr>";
        basket.innerHTML += "" + cartBaumart[0] + " " + cartBaumart[1] + "€ <br>";
        basket.innerHTML += cartGröße[0] + " " + cartGröße[1] + "€ <br>";
        basket.innerHTML += cartBeleuchtung[0] + " " + cartBeleuchtung[1] + "€ <br>";
        //basket.innerHTML += cartKugeln[0] + " " + cartKugeln[1] + "€ <br>";
        basket.innerHTML += cartLametta[0] + " " + cartLametta[1] + "€ <br>";
        basket.innerHTML += cartStern[0] + " " + cartStern[1] + "€ <br>";
        basket.innerHTML += cartBezahlmethode[0] + " " + cartBezahlmethode[1] + "€ <br>";
        totalprice = parseFloat(cartBaumart[1]) + parseFloat(cartGröße[1]) + parseFloat(cartStern[1]) + parseFloat(cartLametta[1]) + parseFloat(cartBezahlmethode[1]);
        for (var i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                //totalprice += parseFloat(cartKugeln[i][1]);
                basket.innerHTML += "" + cartKugeln[i][0] + " " + cartKugeln[i][1] + "€ <br>";
            }
        }
        basket.innerHTML += "<hr> totalprice: " + Math.round(totalprice * 100) / 100 + "€";
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map