namespace StudiVZ {
  interface StudentData {
    Matrikelnummer: number;
    Name:           string;
    Vorname:        string;
    Alter:          number;
    Geschlecht:     boolean;
    Kommentar:      string;
  }

  var students: StudentData[] = [];
  var stop: boolean = false;

  while (!stop) {
    var action: string = prompt("Datensatz anlegen (n)\nabfragen(a)\nProgramm beenden (s)\n\nn,a oder s eingeben");

    switch (action) {
      case "n":
      case "N":
      var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter,\nGeschlecht (m oder w) und Kommentar");
      alert(saveData(input));
      break;
      case "a":
      case "A":
      var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
      alert(queryData(matrikel));
      break;
      case "s":
      case "S":
      stop = true;
    }
  }

  function saveData(_input: string): string {
    var student: any = _input.split(',', 6);
    student[0] = parseInt(student[0]);
    student[3] = parseInt(student[3]);
    if (student[4] == "m"){student[4] = true;}
    if (student[4] == "w"){student[4] = false;}
    if (isNaN(student[0]) || isNaN(student[3]) || typeof(student[4]) != "boolean" ) {
      return "Du hast was falsch gemacht! Versuche es noch einmal."
    }
    else {
      students[student[0]] = student;
      return "Super du hast alles richtig gemacht."
    }
  }

  function queryData(_matrikel: number): string {
    if (typeof students[_matrikel] !== 'undefined') {return `Hier sind deine Daten:\n${students[_matrikel]}`}
    else {return "Deine Daten sind nicht in der Datenbank gespeichert."}
  }
}
