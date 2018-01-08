namespace Aufgabe10 {
  // Aufgabe: 10
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 06.01.18
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
  window.addEventListener("load", createhtml);
  window.addEventListener("change",test1);

  function test1(event){
    let name = event.srcElement.dataset.name;
    let type = event.srcElement.dataset.type;
    console.log(type, name);
}


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
        option.setAttribute(`data-type`, Aufgabe10.data[i].type);
        option.setAttribute(`data-name`, Aufgabe10.data[i].name);
        select.appendChild(option);
      }
    }
  //
  //   let größe: HTMLDivElement = <HTMLDivElement>document.getElementById("größe");
  //   let slider: HTMLInputElement = document.createElement("input");
  //   slider.type = "range";
  //   slider.value = "1";
  //   slider.id = "Größe";
  //   slider.min = "1";
  //   let slidermax: number = 0;
  //   for(let i: number = 0; i < data.length; i++){if (data[i].type == "Größe") {slidermax++;}}
  //   slider.max =  `${slidermax}`;
  //   slider.step = "1";
  //   größe.appendChild(slider);
  //   let sliderlabelul: HTMLElement = document.createElement("ul");
  //   größe.appendChild(sliderlabelul);
  //   for(let i: number = 0; i < data.length; i++){
  //     if (data[i].type == "Größe") {
  //       let sliderlabel: HTMLElement = document.createElement("li");
  //       sliderlabel.innerText = data[i].name;
  //       sliderlabelul.appendChild(sliderlabel);
  //     }
  //   }
  //
  //
  //   let lichter: HTMLDivElement = <HTMLDivElement>document.getElementById("lichter");
  //   let select2: HTMLSelectElement = document.createElement("select");
  //   select2.id = "selectLichter";
  //   lichter.appendChild(select2);
  //   for (let i: number = 0; i < data.length; i++) {
  //     if (data[i].type == "Lichter") {
  //       let option2: HTMLElement = document.createElement("option");
  //       option2.innerText = data[i].name;
  //       option2.id = "option2." + i;
  //       select2.appendChild(option2);
  //     }
  //   }
  //
  //   let kugeln: HTMLDivElement = <HTMLDivElement>document.getElementById("kugeln");
  //   for (let i: number = 0; i < data.length; i++) {
  //     if (data[i].type == "Kugeln") {
  //       var check1: HTMLInputElement = document.createElement("input");
  //       check1.type = "checkbox";
  //       check1.value = "check";
  //       check1.id = "check1" + i;
  //       kugeln.appendChild(check1);
  //
  //       var label: HTMLLabelElement = document.createElement("label");
  //       label.id = "label" + i;
  //       label.htmlFor = check1.id;
  //       label.innerText = data[i].name;
  //       kugeln.appendChild(label);
  //
  //       let stepper: HTMLInputElement = document.createElement("input");
  //       stepper.type = "number";
  //       stepper.value = "1";
  //       stepper.id = "stepper" + i;
  //       stepper.min = "0";
  //       stepper.max = "10";
  //       stepper.step = "1";
  //       kugeln.appendChild(stepper);
  //       var br: HTMLElement = document.createElement("br");
  //       kugeln.appendChild(br);
  //     }
  //   }
  //
  //   let lametta: HTMLDivElement = <HTMLDivElement>document.getElementById("lametta");
  //   for (let i: number = 0; i < data.length; i++) {
  //     if (data[i].type == "Lametta") {
  //       var radio: HTMLInputElement = document.createElement("input");
  //       radio.type = "radio";
  //       radio.name = "radiogroup";
  //       radio.value = "radio" + i;
  //       radio.id = "radio1" + i;
  //       lametta.appendChild(radio);
  //
  //       var label2: HTMLLabelElement = document.createElement("label");
  //       label2.id = "label" + i;
  //       label2.htmlFor = radio.id;
  //       label2.innerText = data[i].name;
  //       lametta.appendChild(label2);
  //     }
  //   }
  //
  //   let stern: HTMLDivElement = <HTMLDivElement>document.getElementById("stern");
  //   for (let i: number = 0; i < data.length; i++) {
  //     if (data[i].type == "Stern") {
  //       var radio2: HTMLInputElement = document.createElement("input");
  //       radio2.type = "radio";
  //       radio2.name = "radiogroup2";
  //       radio2.value = "radio" + i;
  //       radio2.id = "radio2" + i;
  //       stern.appendChild(radio2);
  //
  //       var label3: HTMLLabelElement = document.createElement("label");
  //       label3.id = "label" + i;
  //       label3.htmlFor = radio.id;
  //       label3.innerText = data[i].name;
  //       stern.appendChild(label3);
  //     }
  //   }
  //
  //   let address: HTMLDivElement = <HTMLDivElement>document.getElementById("adresse");
  //   name = document.createElement("input");
  //   name.type = "text";
  //   name.name = "DataName";
  //   name.placeholder = "Name";
  //   name.pattern = "[a-zA-Z]{1,}";
  //   name.required = true;
  //   address.appendChild(name);
  //
  //
  //
  //   street = document.createElement("input");
  //   street.type = "text";
  //   street.name = "DataStreet";
  //   street.placeholder = "Straße";
  //   street.pattern = "[a-zA-Z]{1,}";
  //   street.required = true;
  //   address.appendChild(street);
  //
  //
  //
  //   housenumber = document.createElement("input");
  //   housenumber.type = "text";
  //   housenumber.name = "DataHousenumber";
  //   housenumber.placeholder = "Hausnummer";
  //   housenumber.pattern = "[0-9]{1,}";
  //   housenumber.required = true;
  //   address.appendChild(housenumber);
  //
  //
  //
  //   city = document.createElement("input");
  //   city.type = "text";
  //   city.name = "DataCity";
  //   city.placeholder = "Ort";
  //   city.pattern = "[a-zA-Z]{1,}";
  //   city.required = true;
  //   address.appendChild(city);
  //
  //
  //
  //   zipcode = document.createElement("input");
  //   zipcode.type = "text";
  //   zipcode.name = "DataZipcode";
  //   zipcode.placeholder = "Postleitzahl";
  //   zipcode.pattern = "[0-9]{5}";
  //   zipcode.required = true;
  //   address.appendChild(zipcode);
  //
  //
  //
  //   email = document.createElement("input");
  //   email.type = "email";
  //   email.name = "DataEmail";
  //   email.placeholder = "E-Mail";
  //   email.required = true;
  //   address.appendChild(email);
  //
  //
  //
  //   extra = document.createElement("textarea");
  //   extra.name = "DataExtras";
  //   extra.placeholder = "Extrawünsche";
  //   extra.cols = 30;
  //   extra.rows = 3;
  //   extra.required = true;
  //   address.appendChild(extra);
  //
  //
  //
  //   let bezahlmethode: HTMLDivElement = <HTMLDivElement>document.getElementById("bezahlmethode");
  //   for (let i: number = 0; i < data.length; i++) {
  //     if (data[i].type == "Bezahlmethode") {
  //       var radio: HTMLInputElement = document.createElement("input");
  //       radio.type = "radio";
  //       radio.name = "radiogroup3";
  //       radio.value = "radio" + i;
  //       radio.id = "radio3" + i;
  //       bezahlmethode.appendChild(radio);
  //
  //       var label3: HTMLLabelElement = document.createElement("label");
  //       label3.id = "label" + i;
  //       label3.htmlFor = radio.id;
  //       label3.innerText = data[i].name;
  //       bezahlmethode.appendChild(label3);
  //     }
  //   }
  //
  //
  //   let button: HTMLDivElement = <HTMLDivElement>document.getElementById("check");
  //   let checkout: HTMLButtonElement = document.createElement("button");
  //   checkout.name = "Button";
  //   checkout.type = "button";
  //   checkout.innerText = "Bestellung überprüfen";
  //   checkout.addEventListener("mousedown", check);
  //   button.appendChild(checkout);
  // }
  //
  // function check(event: MouseEvent) : void {                                                          //check
  //   let button: HTMLDivElement = <HTMLDivElement>document.getElementById("check");
  //   let status: HTMLDivElement = document.createElement("div");
  //   if (name.checkValidity() == false || street.checkValidity() == false || housenumber.checkValidity() == false || city.checkValidity() == false || zipcode.checkValidity() == false || email.checkValidity() == false) {
  //     status.innerText = "Check again! - Die Daten deiner Bestellung sind nicht korrekt.";
  //     status.id = "checkoutstatus"
  //     button.appendChild(status);
  //   }
  //   else {
  //     status.innerText = "Great job! - Du hast alles richtig gemacht.";
  //     status.id = "checkoutstatus"
  //     button.appendChild(status);
  //   }
  // }
  //
  // let cartBezahlmethode: string [] =["äpfel","2"];
  // let cartStern: string[]= ["test1","5"];
  // let cartLametta: string[] =["test1","5"];
  // let cartBaumart: string[] = ["bananen", "5"];
  // let cartBeleuchtung: string[]= ["test1","5"];
  // let cartKugeln: string[][] = [0]["test1"];
  // let cartGröße: string[]= ["test1","5"];
  //
  // function cart(event: Event): void {                                                           //cart
  //
  //   let target: HTMLInputElement = <HTMLInputElement>event.target;
  //   let stepper: HTMLInputElement[] = [];
  //   let checkBoxes: HTMLInputElement[] = [];
  //   let totalprice: number = 0;
  //
  //
  //   for (let i: number = 0; i < data.length; i++) {
  //     if (data[i].type == "Kugeln") {
  //       stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
  //       checkBoxes[i] = <HTMLInputElement>document.getElementById("check1" + i);
  //     }
  //
  //     if (target.value == data[i].name && target.id == "selectBaumart") {
  //       cartBaumart[0] = data[i].name;
  //       cartBaumart[1] = "" + data[i].price;
  //     }
  //
  //     if (target.id == "Größe") {
  //       let größeint :number = parseInt(target.value);
  //       console.log("int= " + größeint);
  //       console.log("i  = " + i);
  //       cartGröße[0] = data[(i + größeint -1)].name;
  //
  //       cartGröße[1] = "" + data[(i + größeint -1)].price;
  //     }
  //
  //     if (target.id == "radio1" + i) {
  //       cartLametta[0] = data[i].name;
  //       cartLametta[1] = "" + data[i].price;
  //     }
  //
  //     if (target.id == "radio2" + i) {
  //       cartStern[0] = data[i].name;
  //       cartStern[1] = "" + data[i].price;
  //     }
  //
  //     if (target.id == "radio3" + i) {
  //       cartBezahlmethode[0] = data[i].name;
  //       cartBezahlmethode[1] = "" + data[i].price;
  //     }
  //
  //     if (target.value == data[i].name && target.id == "selectLichter") {
  //       cartBeleuchtung[0] = data[i].name;
  //       cartBeleuchtung[1] = "" + data[i].price;
  //     }
  //
  //     if (target.id == "check" + i || target.id == "stepper" + i) {
  //       cartKugeln[i] = [data[i].name, "" + (data[i].price * parseInt(stepper[i].value))];
  //     }
  //   }
  //
  //   let basket: HTMLDivElement = <HTMLDivElement>document.getElementById("basket");
  //   basket.style.width = "25%";
  //   basket.style.height = "auto";
  //   basket.style.backgroundColor = "#0B610B";
  //   basket.innerHTML = "<span class='cart'>Warenkorb</span><hr>";
  //   basket.innerHTML += "" + cartBaumart[0] + " " + cartBaumart[1] + "€ <br>";
  //   basket.innerHTML += cartGröße[0] + " " + cartGröße[1] + "€ <br>";
  //   basket.innerHTML += cartBeleuchtung[0] + " " + cartBeleuchtung[1] + "€ <br>";
  //   //basket.innerHTML += cartKugeln[0] + " " + cartKugeln[1] + "€ <br>";
  //   basket.innerHTML += cartLametta[0] + " " + cartLametta[1] + "€ <br>";
  //   basket.innerHTML += cartStern[0] + " " + cartStern[1] + "€ <br>";
  //   basket.innerHTML += cartBezahlmethode[0] + " " + cartBezahlmethode[1] + "€ <br>";
  //
  //   totalprice = parseFloat(cartBaumart[1]) + parseFloat(cartGröße[1]) + parseFloat(cartStern[1])+ parseFloat(cartLametta[1])+ parseFloat(cartBezahlmethode[1]);
  //   for (let i: number = 0; i < stepper.length; i++) {
  //     if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
  //       //totalprice += parseFloat(cartKugeln[i][1]);
  //       basket.innerHTML += "" + cartKugeln[i][0] + " " + cartKugeln[i][1] + "€ <br>";
  //     }
  //   }
  //   basket.innerHTML += "<hr> totalprice: " + Math.round(totalprice * 100) / 100 + "€";
  }










}
