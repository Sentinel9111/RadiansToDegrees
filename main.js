/*
Fijne π-dag 🙂

Oefening:
Schrijf een expressieve (/anonieme) functie waar je een graad invoert en deze een radians teruggeeft. Gebruik hiervoor PI ... 😉
Extra oefening:
Schrijf een expressieve functie die het omgekeerde doet (voer radians in en krijg graad terug).

Als je het jezelf moeilijk wil maken, gebruik modulus operator om ook boven de 360 graden de juiste pi waarde terug te geven en andersom...
Die heb je vast nog niet gebruikt.
*/
const π = Math.PI;
const gradenBerekenen = radialen => {
    console.log(`\n${radialen} radialen is ${radialen * (180 / π)} graden`)
};
gradenBerekenen(2 * π);