//import { LOADIPHLPAPI } from "dns";

/*
 * CURRENCY CONVERTER RELOADED
 * Author: <your name here>
 * ---------------------------
 *
 * This converts currencies...somehow.
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe: Baut einen neuen Währungsumrechner. Nachfolgend findet ihr Code der die 
 *  dafür notwendingen Eingabewerte von der Konsole entgegennimmt.
 * 
 *  Dafür müsst ihr das Script wie folgt aufrufen:
 *  npm start -- <Ausgangssumme> <Ausgangswährung-Code> <Zielwährung-Code>
 *  also z.B.
 *  npm start -- 10.0 USD EUR
 * 
 *  Die erwartete Ausgabe ist ein Text in folgender Form:
 *  "Ergebnis: <Ausgangssumme> <Ausgangswährung> = <Ergebnis> <Zielwährung>"
 *  also z.B.
 *  Ergebnis: 10.00 USD = 11.00 EUR
 *  
 *  Das Script soll mindestens drei verschiedene Währungen in beide Richtungen unterstützen
 */

let args = process.argv.slice(2);

// Eingabe-Variablen deklarieren
let amount, originalCurrency, targetCurrency;

// Konsolen-Argumente in Variablen speichern
if (args.length < 3) {
  console.log('Error: Not enough input arguments given!');
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}

// Variable 'output' deklarieren
// let output;

// Variable 'Faktoren EUR' deklarieren
const currencies = {
  EUR: 1,
  USD: 1.11,
  CZK: 25.58,
  BWP: 12.04,
  AUD: 1.63,
  CNY: 7.78,
  TRY: 6.34,
  ZAR: 16.33
}

const amountInEur = amount / currencies[originalCurrency];

const output = amountInEur * currencies[targetCurrency];



// Ausgabe 'output'
console.log('Das Ergebnis ist: ' + output);
