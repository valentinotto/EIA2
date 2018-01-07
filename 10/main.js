var Aufgabe10;
(function (Aufgabe10) {
    // Aufgabe: 10
    // Name: Valentin Otto
    // Matrikel: 256320
    // Datum: 06.01.18
    //
    // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", createhtml);
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
                option.id = "option" + i;
                select.appendChild(option);
            }
        }
        var größe = document.getElementById("größe");
        var slider = document.createElement("input");
        slider.type = "range";
        slider.value = "0";
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
        select2.id = "selectBeleuchtung";
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
                check1.id = "check" + i;
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
                radio.id = "radio" + i;
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
                var radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "radiogroup2";
                radio.value = "radio" + i;
                radio.id = "radio" + i;
                stern.appendChild(radio);
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
                radio.id = "radio" + i;
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
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map