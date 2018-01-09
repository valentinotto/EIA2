namespace Aufgabe10 {
  // Aufgabe: 10
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 06.01.18
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  window.addEventListener("load", createhtml);
  window.addEventListener("change",cart);


  let name: HTMLInputElement;
  let street: HTMLInputElement;
  let housenumber: HTMLInputElement;
  let zipcode: HTMLInputElement;
  let city: HTMLInputElement
  let email: HTMLInputElement;
  let extra: HTMLTextAreaElement;


  function createhtml(): void {

    let baumtype: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");           //Baumart
    let form: HTMLFormElement = document.createElement("form")
    let select: HTMLSelectElement = document.createElement("select");
    select.id = "selectBaumart";
    baumtype.appendChild(select);
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Baumart") {
        let option = document.createElement("option");
        option.innerText = data[i].name;
        option.value = data[i].type + "§" + data[i].name + "§" + data[i].price;
        select.appendChild(option);
      }
    }

    let größe: HTMLDivElement = <HTMLDivElement>document.getElementById("größe");               //Größe
    let slider: HTMLInputElement = document.createElement("input");
    slider.type = "range";
    slider.value = "1";
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


    let lichter: HTMLDivElement = <HTMLDivElement>document.getElementById("lichter");           //Lichter
    let select2: HTMLSelectElement = document.createElement("select");
    select2.id = "Beleuchtung";
    lichter.appendChild(select2);
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Lichter") {
        let option2 = document.createElement("option");
        option2.innerText = data[i].name;
        option2.value = data[i].type + "§" + data[i].name + "§" + data[i].price;
        select2.appendChild(option2);
      }
    }

    let kugeln: HTMLDivElement = <HTMLDivElement>document.getElementById("kugeln");             //Kugeln
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Kugeln") {
        var check1: HTMLInputElement = document.createElement("input");
        check1.type = "checkbox";
        check1.value = "check";
        check1.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
        kugeln.appendChild(check1);

        var label: HTMLLabelElement = document.createElement("label");
        label.id = "label" + i;
        label.htmlFor = check1.id;
        label.innerText = data[i].name;
        kugeln.appendChild(label);

        let stepper: HTMLInputElement = document.createElement("input");
        stepper.type = "number";
        stepper.value = "0";
        stepper.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
        stepper.name = data[i].type + "§" + data[i].name + "§" + data[i].price;
        stepper.min = "0";
        stepper.max = "10";
        stepper.step = "1";
        kugeln.appendChild(stepper);
        var br: HTMLElement = document.createElement("br");
        kugeln.appendChild(br);
      }
    }

    let lametta: HTMLDivElement = <HTMLDivElement>document.getElementById("lametta");             //Lametta
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Lametta") {
        var radio: HTMLInputElement = document.createElement("input");
        radio.type = "radio";
        radio.name = "radiogroup";
        radio.value = data[i].type + "§" + data[i].name + "§" + data[i].price;
        radio.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
        lametta.appendChild(radio);

        var label2: HTMLLabelElement = document.createElement("label");
        label2.id = "label" + i;
        label2.htmlFor = radio.id;
        label2.innerText = data[i].name;
        lametta.appendChild(label2);
      }
    }

    let stern: HTMLDivElement = <HTMLDivElement>document.getElementById("stern");                 //Stern
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Stern") {
        var radio2: HTMLInputElement = document.createElement("input");
        radio2.type = "radio";
        radio2.name = "radiogroup2";
        radio2.value = data[i].type + "§" + data[i].name + "§" + data[i].price;
        radio2.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
        stern.appendChild(radio2);

        var label3: HTMLLabelElement = document.createElement("label");
        label3.id = "label" + i;
        label3.htmlFor = radio.id;
        label3.innerText = data[i].name;
        stern.appendChild(label3);
      }
    }

    let address: HTMLDivElement = <HTMLDivElement>document.getElementById("adresse");               //Form
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



    let bezahlmethode: HTMLDivElement = <HTMLDivElement>document.getElementById("bezahlmethode");         //Bezahlmethode
    for (let i: number = 0; i < data.length; i++) {
      if (data[i].type == "Bezahlmethode") {
        var radio: HTMLInputElement = document.createElement("input");
        radio.type = "radio";
        radio.name = "radiogroup3";
        radio.value = data[i].type + "§" + data[i].name + "§" + data[i].price;
        radio.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
        bezahlmethode.appendChild(radio);

        var label3: HTMLLabelElement = document.createElement("label");
        label3.id = "label" + i;
        label3.htmlFor = radio.id;
        label3.innerText = data[i].name;
        bezahlmethode.appendChild(label3);
      }
    }


    let button: HTMLDivElement = <HTMLDivElement>document.getElementById("check");                    //Button Check
    let checkout: HTMLButtonElement = document.createElement("button");
    checkout.name = "Button";
    checkout.type = "button";
    checkout.innerText = "Bestellung überprüfen";
    checkout.addEventListener("mousedown", check);
    button.appendChild(checkout);
  }

  function check(event: MouseEvent) : void {                                                          //check event
    let button: HTMLDivElement = <HTMLDivElement>document.getElementById("check");
    let status: HTMLDivElement = document.createElement("div");
    if (name.checkValidity() == false || street.checkValidity() == false || housenumber.checkValidity() == false || city.checkValidity() == false || zipcode.checkValidity() == false || email.checkValidity() == false) {
      status.innerText = "Check again! - Die Daten deiner Bestellung sind nicht korrekt.";
      status.id = "checkoutstatus"
      button.appendChild(status);
    }
    else {
      status.innerText = "Great job! - Du hast alles richtig gemacht.";
      status.id = "checkoutstatus"
      button.appendChild(status);
    }
  }

  let cartBezahlmethode: string [] =["0"];
  let cartStern: string[]= ["0"];
  let cartLametta: string[] =["0"];
  let cartBaumart: string[] = ["0"];
  let cartBeleuchtung: string[]= ["0"];
  let cartKugeln: string[][] = [];
  let cartGröße: string[]= ["0"];

  function cart(event: Event): void {                                                           //cart
    let target: HTMLInputElement = <HTMLInputElement>event.target;
    let stepper: HTMLInputElement[] = [];
    let checkBoxes: HTMLInputElement[] = [];
    let totalprice: number = 0;

    let inputInfo = target.id.split("§");
    console.log(inputInfo, target.value);
    //
    // for (let i: number = 0; i < data.length; i++) {
    //   if (data[i].type == "Kugeln") {
    //     stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
    //     checkBoxes[i] = <HTMLInputElement>document.getElementById("check1" + i);
    //   }
    //
    //   if (target.value == data[i].name && target.id == "selectBaumart") {
    //     cartBaumart[1] = data[i].name;
    //     cartBaumart[0] = "" + data[i].price;
    //   }
    //
    //   if (target.id == "Größe") {
    //     let größeint :number = parseInt(target.value);
    //     cartGröße[1] = data[(i + größeint -1)].name;
    //     cartGröße[0] = "" + data[(i + größeint -1)].price;
    //     console.log(cartGröße[0]);
    //   }
    //
    //   if (target.id == "radio1" + i) {
    //     cartLametta[1] = data[i].name;
    //     cartLametta[0] = "" + data[i].price;
    //   }
    //
    //   if (target.id == "radio2" + i) {
    //     cartStern[1] = data[i].name;
    //     cartStern[0] = "" + data[i].price;
    //   }
    //
    //   if (target.id == "radio3" + i) {
    //     cartBezahlmethode[1] = data[i].name;
    //     cartBezahlmethode[0] = "" + data[i].price;
    //   }
    //
    //   if (target.value == data[i].name && target.id == "selectLichter") {
    //     cartBeleuchtung[1] = data[i].name;
    //     cartBeleuchtung[0] = "" + data[i].price;
    //   }
    //
    //   if (target.id == "check" + i || target.id == "stepper" + i) {
    //     cartKugeln[i] = [data[i].name, "" + (data[i].price * parseInt(stepper[i].value))];
    //   }
    // }
    //
    // let basket: HTMLDivElement = <HTMLDivElement>document.getElementById("basket");
    // basket.style.width = "25%";
    // basket.style.height = "auto";
    // basket.style.backgroundColor = "#999999";
    // basket.innerHTML = "<span class='cart'>Warenkorb</span><hr>";
    // if(cartBaumart[1] != undefined){basket.innerHTML += "" + cartBaumart[1] + " " + cartBaumart[0] + "€ <br>";}
    // if(cartGröße[1] != undefined){basket.innerHTML += cartGröße[1] + " " + cartGröße[0] + "€ <br>";}
    // if(cartBeleuchtung[1] != undefined && cartBeleuchtung[1] != "Keine"){basket.innerHTML += cartBeleuchtung[1] + " " + cartBeleuchtung[0] + "€ <br>";}
    // if(cartKugeln[0] != undefined){basket.innerHTML += cartKugeln[1] + " " + cartKugeln[0] + "€ <br>";}
    // if(cartLametta[1] != undefined && cartLametta[1] != "Nein"){basket.innerHTML += "Lametta " + cartLametta[0] + "€ <br>";}
    // if(cartStern[1] != undefined && cartStern[1] != "Nein"){basket.innerHTML += "Stern "  + cartStern[0] + "€ <br>";}
    // if(cartBezahlmethode[1] != undefined){basket.innerHTML += cartBezahlmethode[1] + " " + cartBezahlmethode[0] + "€ <br>";}
    //
    // totalprice = parseFloat(cartBaumart[0]) + parseFloat(cartGröße[0]) + parseFloat(cartStern[0])+ parseFloat(cartLametta[0])+ parseFloat(cartBezahlmethode[0]) + parseFloat(cartBeleuchtung[0]);
    // for (let i: number = 0; i < stepper.length; i++) {
    //   if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
    //     totalprice += parseFloat(cartKugeln[i][0]);
    //     basket.innerHTML += "" + cartKugeln[i][0] + " " + cartKugeln[i][1] + "€ <br>";
    //   }
    // }
    // basket.innerHTML += "<hr> totalprice: " + Math.round(totalprice * 100) / 100 + "€";
  }










}
