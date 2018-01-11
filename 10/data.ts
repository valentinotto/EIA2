namespace Aufgabe10 {
  // Aufgabe: 10
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 06.01.18
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

  export interface orderdata {
    type: string;
    name: string;
    price: number;
  }

  export let data: orderdata[] = [
    { type: "Baumart", name: "Nordmanntanne", price: 9.99 },
    { type: "Baumart", name: "Eibe", price: 17.03 },
    { type: "Baumart", name: "Schokobaum", price: 29.99 },
    { type: "Baumart", name: "Gummibaum", price: 333.33 },
    { type: "Baumart", name: "Kabelbaum", price: 1234.56 },
    { type: "Größe", name: "Winzig", price: 0 },
    { type: "Größe", name: "Klein", price: 5.99 },
    { type: "Größe", name: "Normal", price: 9.99 },
    { type: "Größe", name: "Groß", price: 19.99 },
    { type: "Lichter", name: "Keine", price: 0 },
    { type: "Lichter", name: "Lichterkette", price: 12.99 },
    { type: "Lichter", name: "Laserschwerter", price: 119.99 },
    { type: "Lichter", name: "Xenon Lichter", price: 49.99 },
    { type: "Lichter", name: "Kerzen", price: 4.99 },
    { type: "Kugeln", name: "Kugel, Rot", price: 1.99 },
    { type: "Kugeln", name: "Kugel, Gold", price: 3.99 },
    { type: "Kugeln", name: "Kugel, Lila", price: 2.99 },
    { type: "Kugeln", name: "Kugel, Transparent", price: 9.99 },
    { type: "Lametta", name: "Nein", price: 0 },
    { type: "Lametta", name: "Ja", price: 15.33 },
    { type: "Stern", name: "Nein", price: 0 },
    { type: "Stern", name: "Ja", price: 23.45 },
    { type: "Bezahlmethode", name: "Pay Pal", price: 0.0 },
    { type: "Bezahlmethode", name: "Elch Cash Express", price: 1.29 }
  ];
}
