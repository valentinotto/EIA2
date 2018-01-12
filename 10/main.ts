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
    for (let i: number = 0; i < data.length; i++) {
    if (data[i].type == "Baumart") {
      var radio1: HTMLInputElement = document.createElement("input");
      radio1.type = "radio";
      radio1.name = "radiogroup1";
      radio1.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
      baumtype.appendChild(radio1);

      var label1: HTMLLabelElement = document.createElement("label");
      label1.id = "label" + i;
      label1.htmlFor = radio1.id;
      label1.innerText = data[i].name;
      baumtype.appendChild(label1);
    }
  }

  let größe: HTMLDivElement = <HTMLDivElement>document.getElementById("größe");               //Größe
  let slider: HTMLInputElement = document.createElement("input");
  slider.type = "range";
  slider.value = "0";
  slider.id = "Größe";
  slider.min = "0";
  let slidermax: number = 0;
  for(let i: number = 0; i < data.length; i++){if (data[i].type == "Größe") {slidermax++;}}
  slider.max =  `${slidermax - 1}`;
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
  for (let i: number = 0; i < data.length; i++) {
  if (data[i].type == "Lichter") {
    var radio3: HTMLInputElement = document.createElement("input");
    radio3.type = "radio";
    radio3.name = "radiogroup3";
    radio3.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
    lichter.appendChild(radio3);


    var label3: HTMLLabelElement = document.createElement("label");
    label3.id = "label" + i;
    label3.htmlFor = radio1.id;
    label3.innerText = data[i].name;
    lichter.appendChild(label3);
  }
}

let kugeln: HTMLDivElement = <HTMLDivElement>document.getElementById("kugeln");             //Kugeln
for (let i: number = 0; i < data.length; i++) {
if (data[i].type == "Kugeln") {

  let stepper: HTMLInputElement = document.createElement("input");
  var label: HTMLLabelElement = document.createElement("label");
  label.id = "label" + i;
  label.htmlFor = stepper.id;
  label.innerText = data[i].name;
  kugeln.appendChild(label);

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
  var radio4: HTMLInputElement = document.createElement("input");
  radio4.type = "radio";
  radio4.name = "radiogroup3";
  radio4.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
  lametta.appendChild(radio4);

  var label4: HTMLLabelElement = document.createElement("label");
  label4.id = "label" + i;
  label4.htmlFor = radio4.id;
  label4.innerText = data[i].name;
  lametta.appendChild(label4);
}
}

let stern: HTMLDivElement = <HTMLDivElement>document.getElementById("stern");                 //Stern
for (let i: number = 0; i < data.length; i++) {
if (data[i].type == "Stern") {
  var radio5: HTMLInputElement = document.createElement("input");
  radio5.type = "radio";
  radio5.name = "radiogroup2";
  radio5.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
  stern.appendChild(radio5);

  var label5: HTMLLabelElement = document.createElement("label");
  label5.id = "label" + i;
  label5.htmlFor = radio5.id;
  label5.innerText = data[i].name;
  stern.appendChild(label5);
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
  var radio6: HTMLInputElement = document.createElement("input");
  radio6.type = "radio";
  radio6.name = "radiogroup6";
  radio6.id = data[i].type + "§" + data[i].name + "§" + data[i].price;
  bezahlmethode.appendChild(radio6);

  var label6: HTMLLabelElement = document.createElement("label");
  label6.id = "label" + i;
  label6.htmlFor = radio6.id;
  label6.innerText = data[i].name;
  bezahlmethode.appendChild(label6);
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
let cartKugeln: any [][] = [0]["undefined"];
let cartGröße: string[]= ["0"];

function cart(event: Event): void {                                                           //cart
  let target: HTMLInputElement = <HTMLInputElement>event.target;
  let totalprice: number = 0;
  let inputInfo = target.id.split("§");             //0=type,1=name,2=price
  //console.log(inputInfo, target.value);
  if (inputInfo[0] == "Baumart") {
  cartBaumart[1] = inputInfo[1];
  cartBaumart[0] = inputInfo[2];
}

if (inputInfo[0] == "Größe") {
  let größeInt :number = parseInt(target.value);
  let größeName : string [] = [];
  let größePrice : number[] = [];

  for(let i: number = 0; i < data.length; i++){
    if(data[i].type == "Größe"){
      größeName.push(data[i].name);
      größePrice.push(data[i].price);
    }
  }
  cartGröße[1] =  größeName[größeInt];
  cartGröße[0] = `${größePrice[größeInt]}`;
}

if (inputInfo[0] == "Lichter") {
  cartBeleuchtung[1] = inputInfo[1];
  cartBeleuchtung[0] = inputInfo[2];
}

if (inputInfo[0] == "Kugeln" && target.value != "check") {
  let kugelnName : string [] = [];
  let kugelnTempName : string;
  for(let i: number = 0; i < data.length; i++){
    if(data[i].type == "Kugeln"){
      kugelnName.push(data[i].name);
    }
  }

  for(let i: number = 0; i < kugelnName.length; i++){                       //hier häng ich wieder, wie kann ich das richtig speichern?
    if(cartKugeln[i][1] !=="undefined" || cartKugeln[i][1] != inputInfo[1]){
      cartKugeln[i] = [inputInfo[1],inputInfo[2],target.value];
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
let basket: HTMLDivElement = <HTMLDivElement>document.getElementById("basket");
basket.style.backgroundColor = "#e6e6e6";
basket.innerHTML = "<span class='cart'>Warenkorb</span><hr>";
if(cartBaumart[1] != undefined && cartBaumart[0] != "0"){basket.innerHTML += "" + cartBaumart[1] + " " + cartBaumart[0] + "€ <br>";}
if(cartGröße[1] != undefined && cartGröße[0] != "0"){basket.innerHTML += cartGröße[1] + " " + cartGröße[0] + "€ <br>";}
if(cartBeleuchtung[1] != undefined && cartBeleuchtung[0] != "0"){basket.innerHTML += cartBeleuchtung[1] + " " + cartBeleuchtung[0] + "€ <br>";}
if(cartLametta[1] != undefined && cartLametta[0] != "0"){basket.innerHTML += "Lametta " + cartLametta[0] + "€ <br>";}
if(cartStern[1] != undefined && cartStern[0] != "0"){basket.innerHTML += "Stern "  + cartStern[0] + "€ <br>";}
if(cartBezahlmethode[1] != undefined && cartBezahlmethode[0] != "0"){basket.innerHTML += cartBezahlmethode[1] + " " + cartBezahlmethode[0] + "€ <br>";}

totalprice = parseFloat(cartBaumart[0]) + parseFloat(cartGröße[0]) + parseFloat(cartStern[0])+ parseFloat(cartLametta[0])+ parseFloat(cartBezahlmethode[0]) + parseFloat(cartBeleuchtung[0]);
for (let i: number = 0; i < cartKugeln.length; i++) {
  totalprice += cartKugeln[i][1] * parseInt(cartKugeln[i][2]);
  basket.innerHTML += cartKugeln[i][2] + "X " + cartKugeln[i][0] + " " + cartKugeln[i][1] + "€ <br>";
}
basket.innerHTML += "<hr> Gesamtpreis: " + Math.round(totalprice * 100) / 100 + "€";
}










}
