//Konsolenausgabe//
console.log("Hallo");
window.onload = function () {
    document.getElementById("Button").addEventListener("click", ChangeName);
    document.getElementById("id1").addEventListener("click", ChangeClass);
    window.alert("Schon OK geklickt?");
    console.log("Seite geladen");


    //Rechnung, Wertzuwesiung//
    let name: string = "Name"; //Typ String
    let surname: string = "Name2";
    let number1: number = 1; //Typ Number
    let number2: number = 2;
    let number3: number = 3;
    number1 = 2; //Neuer Wert zugewiesen
    console.log(number1 + number2);
    number1 = number2 + number3 + number2; //Addiert und neue Wertzwueisung
    console.log(name + number1);
    console.log(name + surname);
    console.log(number1);
}

//Button verändert sich auf Klick//
function ChangeName() {
    document.getElementById("Button").innerHTML = "Hans Günter";
}


//Klasse eines HTML Elements verändert//
function ChangeClass(){
    document.getElementById("id1").className = "Klasse2";

}

//Neue HTML Dateien erstellen//
function newtext() {
    let heading = document.createElement("h2");
    let node = document.createTextNode("Diese Überschrift wurde mit TypeScript erstellt!");
    heading.appendChild(node);
    let element = document.getElementById("id3");
    element.appendChild(heading);
    let para = document.createElement("p");
    node = document.createTextNode("Dieser Paragraph wurde mit TypeScript erstellt!");
    para.appendChild(node);
    element = document.getElementById("id3");
    element.appendChild(para);
}

