let monsterHolder = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let highScore = 0; // Speichert den Highscore
let givingUpButtonCheck = false; // Um zu checken ob ein givingUpButton existiert
// Ein paar globale Variablen, welche den Spieler darstellen.
let playerName = "Lisa"; // Stellt den Spieler-Namen dar.
let playerXP = 0; //Fehler gefunden- Anfangswert   // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel = 500; // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
let playerMoney = 100; // Stellt das gesammelte Geld des Spielers dar
let playerItem = "Bier"; // Stellt das Item des Spielers dar
let playerHealthPoints = 100; // Stellt die Health-Points des Spielers dar.
// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let type = ["Holz", "Wasser", "Rentner", "Metall", "Feuer", "Mini", "Idioten", "Vampir", "Baby", "Alkoholiker", "Schwächling"]; // length = 11, da 11 Einträge. Von 0-10.    //Wurde von "Prefix" zu "Typ" umfunktioniert    
let monsterName = ["Ratte", "Spinne", "Käfer", "Hund", "Student", "Gremlin", "Roboter", "Geist"]; // length = 8, da 8 Einträge. Von 0-7.         // 🗹 Mindestanforderung Nr.5
let suffix = [" des Verderbens", " aus der Hölle", " des Grauens", " mit Rheuma", " aus Furtwangen", " mit Minderwertigkeits-Komplexen", " vom Dorf", " aus der Wüste", " aus dem Wald", " aus Mordor", " des Todes"]; // length = 11, da hier 11 Einträge sind. Von 0-10.
let monsterModifers = ["Stark", "Schwach", "Pleite", "Reich", "Bier-Connoisseur", "Verfehlt häufig", "Müde", "Nervig", "Verwirrt", "Linkshänder", "Harmlos"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster. length = 11 VOn 0-10
let items = ["Flammenwerfer", "Fön", "IPhone", "Magnet", "Wasserpistole", "Fliegenklatsche", "Buch", "Knoblauch", "Schnuller", "Alkoholfreies-Bier", "Allmächtiges Schwert"]; //Eine Reihe von zufälligen "Verstärkern" für das Monster. leghth = 11 Von 0-10.
let monsterIcons = ["imgs/MonsterIcon1.png", "imgs/MonsterIcon2.png", "imgs/MonsterIcon3.png", "imgs/MonsterIcon4.png", "imgs/MonsterIcon5.png", "imgs/MonsterIcon6.png", "imgs/MonsterIcon7.png", "imgs/MonsterIcon8.png", "imgs/MonsterIcon9.png", "imgs/MonsterIcon10.png",
    "imgs/MonsterIcon11.png", "imgs/MonsterIcon12.png", "imgs/MonsterIcon13.png", "imgs/MonsterIcon14.png", "imgs/MonsterIcon15.png", "imgs/MonsterIcon16.png", "imgs/MonsterIcon17.png", "imgs/MonsterIcon18.png", "imgs/MonsterIcon19.png", "imgs/MonsterIcon20.png",
    "imgs/MonsterIcon21.png", "imgs/MonsterIcon22.png", "imgs/MonsterIcon23.png", "imgs/MonsterIcon24.png", "imgs/MonsterIcon25.png", "imgs/MonsterIcon26.png", "imgs/MonsterIcon27.png", "imgs/MonsterIcon28.png", "imgs/MonsterIcon29.png", "imgs/MonsterIcon30.png"]; // Eine Reihe von zufälligen Bildern für das Monster. length = 20 VOn 0-19
// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.
// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)             // Alle Fehler gefunden!
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayer(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
};
//console.log(document.getElementById("monsterSpawner").innerHTML);             //FEHLER 1 GEFUNDEN!:  Ziemlich unnötige consolen Ausgabe die Ich mal auskommentiert habe 
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    if (playerMoney >= 20) // Nur ausführen wenn noch genug Geld vorhanden ist (Neue Monster kosten 20$)
     {
        playerMoney -= 20; // 20$ werden vom Geld abgezogen
        updatePlayer();
        let newMonsterType = generateMonsterType(); // Eigens-gebaute Funktion, welche einen String zurück gibt.
        let newMonsterModifier = generateMonsterModifer(); // Eigens-gebaute Funktion, welche ein String-Array zurück gibt.
        let newMonsterName = generateMonsterName(newMonsterType); // Eigens-gebaute Funktion, welche einen String zurück gibt.
        let newMonsterHitPoints = generateMonsterHitPoints(newMonsterModifier); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterMoney = generateMonsterMoney(newMonsterType, newMonsterModifier); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterItem = generateMonsterItem(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterIcon = generateMonsterIcon(); // Eigens-gebaute Funktion, welche einen String zurück gibt.    // 🗹 Mindestanforderung Nr. 4
        let newMonster = {
            monsterType: newMonsterType,
            monsterName: newMonsterName,
            monsterHitPoints: newMonsterHitPoints,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            monsterMoney: newMonsterMoney,
            monsterItem: newMonsterItem,
            monsterIcon: newMonsterIcon
        };
        monsterArray.push(newMonster); // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 
        console.log("XP vom neuen Monster: " + monsterArray[monsterArray.length - 1].monsterExperience +
            ", Geld vom neuen Monster: " + monsterArray[monsterArray.length - 1].monsterMoney); //FEHLER 3 GEFUNDEN!: So geändert dass es die XP des neuen Monsters ausgibt // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
        monsterGenerateHTML(); // Triggere die Generierung von HTML
    }
    else {
        window.alert("Du hast nicht genug Geld!"); // Alert falls nicht genug Geld vorhanden ist
        if (givingUpButtonCheck == false) { // Nur einen givigUpButton erstellen falls es noch keinen gibt
            givingUpButtonCheck = true;
            let givingUpButton = document.createElement("BUTTON"); // Generiere einen <buton> mit dem man Aufgeben kann
            givingUpButton.setAttribute("id", "givingUpButton");
            givingUpButton.innerHTML = "Aufgeben?";
            document.getElementById("buttonsDiv").appendChild(givingUpButton); // Füge den <button> dem <main> Element dazu
            givingUpButton.addEventListener("click", killPlayer); // Gib <button> einen Event-Listener der eine Funktion ausführt die den Spieler tötet
            console.log("Selbstmord-Button erstellt");
        }