namespace Aufgabe10 {
  // Aufgabe: 10
  // Name: Valentin Otto
  // Matrikel: 256320
  // Datum: 06.01.18
  //
  // Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

  export interface orderdata {
    key: string
    type: string;
    name: string;
    price: number;
  }

  export let data: orderdata[] = [
    { key: "001", type: "Baumart", name: "Nordmanntanne", price: 9.99 },
    { key: "002", type: "Baumart", name: "Eibe", price: 17.03 },
    { key: "003", type: "Baumart", name: "Schokobaum", price: 29.99 },
    { key: "004", type: "Baumart", name: "Gummibaum", price: 333.33 },
    { key: "005", type: "Baumart", name: "Kabelbaum", price: 1234.56 },
    { key: "006", type: "Größe", name: "winzig", price: 0 },
    { key: "007", type: "Größe", name: "klein", price: 5.00 },
    { key: "080", type: "Größe", name: "normal", price: 10.00 },
    { key: "090", type: "Größe", name: "groß", price: 99.99 },
    { key: "010", type: "Lichter", name: "Keine", price: 0 },
    { key: "011", type: "Lichter", name: "Lichterkette", price: 12.99 },
    { key: "012", type: "Lichter", name: "Laserschwerter", price: 119.99 },
    { key: "013", type: "Lichter", name: "Xenon Lichter", price: 49.99 },
    { key: "014", type: "Lichter", name: "Kerzen", price: 4.99 },
    { key: "015", type: "Kugeln", name: "Kugel, Rot", price: 1.99 },
    { key: "016", type: "Kugeln", name: "Kugel, Gold", price: 3.99 },
    { key: "017", type: "Kugeln", name: "Kugel, Lila", price: 0.09 },
    { key: "180", type: "Kugeln", name: "Kugel, Transparent", price: 9.99 },
    { key: "190", type: "Lametta", name: "Nein", price: 0 },
    { key: "020", type: "Lametta", name: "Ja", price: 15.33 },
    { key: "021", type: "Stern", name: "Nein", price: 0 },
    { key: "022", type: "Stern", name: "Ja", price: 23.45 },
    { key: "023", type: "Bezahlmethode", name: "Pay Pal", price: 0.0 },
    { key: "024", type: "Bezahlmethode", name: "Elch Cash Express", price: 1.29 }
  ];
}
