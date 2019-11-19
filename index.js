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

// Objekt Währungen mit Wechselkurs und Symbolen deklarieren

const currencies = {
  EUR: {
    rate: 1,
    symbol: '€'
  },
  USD: {
    rate: 1.11,
    symbol: 'US$'
  },
  CZK: {
    rate: 25.58,
    symbol: 'Kč'
  },
  BWP: {
    rate: 12.04,
    symbol: 'P'
  },
  AUD: {
    rate: 1.63,
    symbol: 'AU$'
  },
  CNY: {
    rate: 7.78,
    symbol: 'RMB¥'
  },
  TRY: {
    rate: 6.34,
    symbol: '₺'
  },
  ZAR: {
    rate: 16.33,
    symbol: 'R'
  }
  //symbols: {
  //  EUR: '€', USD: 'US$',CZK: 'Kč',BWP: 'P',AUD: 'AU$',CNY: 'RMB¥',TRY: '₺',ZAR: 'R'
  //}
}

let download;

const request = require('request');
request('https://api.exchangeratesapi.io/latest', function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  download = JSON.parse(body);

  try {
    for (const rates in download.rates) {
      if (download.hasOwnProperty(rates)) {
        const element = download.rates[rates];
        currencies[element].rate = download.rates[element];
      } else if (download.hasOwnProperty(rates) === false) {
        currencies[rates] = {};
        currencies[rates].rate = download.rates[rates];

      }
    }
  } catch (error) {
    console.error(error);
  }




  const amountInEur = amount / currencies[originalCurrency].rate;

  const output = amountInEur * currencies[targetCurrency].rate;

  // Ausgabe 'output'
  console.log(`Das Ergebnis ist: ${output}${currencies[targetCurrency].symbol}`);

  console.log(currencies);
  

});