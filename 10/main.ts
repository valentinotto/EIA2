namespace Aufgabe10 {
  // Aufgabe: 10
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 06.01.18
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  window.addEventListener("load", createhtml);



  let name: HTMLInputElement;
  let street: HTMLInputElement;
  let housenumber: HTMLInputElement;
  let zipcode: HTMLInputElement;
  let city: HTMLInputElement
  let email: HTMLInputElement;
  let extra: HTMLTextAreaElement;

  function createhtml(): void {

    let baumtype: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
    let form: HTMLFormElement = document.createElement("form")
    let select: HTMLSelectElement = document.createElement("select");
    select.id = "selectBaumart";
    baumtype.appendChild(select);
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Baumart") {
        let option: HTMLElement = document.createElement("option");
        option.innerText = data[i].name;
        option.id = "option" + i;
        select.appendChild(option);
      }
    }

    let größe: HTMLDivElement = <HTMLDivElement>document.getElementById("größe");
    let slider: HTMLInputElement = document.createElement("input");
    slider.type = "range";
    slider.value = "0";
    slider.id = "Größe";
    slider.min = "1";
    let slidermax: number = 0;
    for(let i: number = 0; i < data.length; i++){if (data[i].type == "Größe") {slidermax++;}}
    slider.max =  `${slidermax}`;
    slider.step = "1";
    größe.appendChild(slider);
    let sliderlabelul: HTMLElement = document.createElement("ul");
    größe.appendChild(sliderlabelul);
    for(let i: number = 0; i < data.length; i++){
      if (data[i].type == "Größe") {
        let sliderlabel: HTMLElement = document.createElement("li");
        sliderlabel.innerText = data[i].name;
        sliderlabelul.appendChild(sliderlabel);
      }
    }


    let lichter: HTMLDivElement = <HTMLDivElement>document.getElementById("lichter");
    let select2: HTMLSelectElement = document.createElement("select");
    select2.id = "selectBeleuchtung";
    lichter.appendChild(select2);
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Lichter") {
        let option2: HTMLElement = document.createElement("option");
        option2.innerText = data[i].name;
        option2.id = "option2." + i;
        select2.appendChild(option2);
      }
    }

    let kugeln: HTMLDivElement = <HTMLDivElement>document.getElementById("kugeln");
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Kugeln") {
        var check1: HTMLInputElement = document.createElement("input");
        check1.type = "checkbox";
        check1.value = "check";
        check1.id = "check" + i;
        kugeln.appendChild(check1);

        var label: HTMLLabelElement = document.createElement("label");
        label.id = "label" + i;
        label.htmlFor = check1.id;
        label.innerText = data[i].name;
        kugeln.appendChild(label);

        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.value = "1";
        stepper.id = "stepper" + i;
        stepper.min = "0";
        stepper.max = "10";
        stepper.step = "1";
        kugeln.appendChild(stepper);
        var br: HTMLElement = document.createElement("br");
        kugeln.appendChild(br);
      }
    }

    let lametta: HTMLDivElement = <HTMLDivElement>document.getElementById("lametta");
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Lametta") {
        var radio: HTMLInputElement = document.createElement("input");
        radio.type = "radio";
        radio.name = "radiogroup";
        radio.value = "radio" + i;
        radio.id = "radio" + i;
        lametta.appendChild(radio);

        var label2: HTMLLabelElement = document.createElement("label");
        label2.id = "label" + i;
        label2.htmlFor = radio.id;
        label2.innerText = data[i].name;
        lametta.appendChild(label2);
      }
    }

    let stern: HTMLDivElement = <HTMLDivElement>document.getElementById("stern");
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Stern") {
        var radio: HTMLInputElement = document.createElement("input");
        radio.type = "radio";
        radio.name = "radiogroup2";
        radio.value = "radio" + i;
        radio.id = "radio" + i;
        stern.appendChild(radio);

        var label3: HTMLLabelElement = document.createElement("label");
        label3.id = "label" + i;
        label3.htmlFor = radio.id;
        label3.innerText = data[i].name;
        stern.appendChild(label3);
      }
    }

    let address: HTMLDivElement = <HTMLDivElement>document.getElementById("adresse");
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



    let bezahlmethode: HTMLDivElement = <HTMLDivElement>document.getElementById("bezahlmethode");
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Bezahlmethode") {
        var radio: HTMLInputElement = document.createElement("input");
        radio.type = "radio";
        radio.name = "radiogroup3";
        radio.value = "radio" + i;
        radio.id = "radio" + i;
        bezahlmethode.appendChild(radio);

        var label3: HTMLLabelElement = document.createElement("label");
        label3.id = "label" + i;
        label3.htmlFor = radio.id;
        label3.innerText = data[i].name;
        bezahlmethode.appendChild(label3);
      }
    }


          let button: HTMLDivElement = <HTMLDivElement>document.getElementById("check");
          let checkout: HTMLButtonElement = document.createElement("button");
          checkout.name = "Button";
          checkout.type = "button";
          checkout.innerText = "Bestellung überprüfen";
          checkout.addEventListener("mousedown", check);
          button.appendChild(checkout);

  }















}
