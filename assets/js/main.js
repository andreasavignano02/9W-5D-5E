"use strict";
class Telefono {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
}
class mobile extends Telefono {
    TogliSoldi() {
        let togli = this.carica - 0.20;
        return togli;
    }
    error404() {
        if (this.carica <= 0) {
            return alert("Non puoi effettuare la chiamata");
        }
    }
    Aggiungi() {
        console.log(this.numeroChiamate++);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // variabbili: 
    let iphone = new mobile(0, 0);
    let samsung = new mobile(0, 0);
    let haweii = new mobile(0, 0);
    let btn = document.querySelector(".iphone");
    let btn2 = document.querySelector(".samsung");
    let btn3 = document.querySelector(".haweii");
    let input = document.querySelector(".input");
    let input2 = document.querySelector(".input2");
    let input3 = document.querySelector(".input3");
    // input function
    input.onkeyup = function keyup(e) {
        let inp = +input.value;
        if (e.key === "Enter") {
            let totale = iphone.carica += inp;
            let p = document.querySelector(".vedi-item");
            if (p !== null) {
                p.innerHTML = totale.toString();
            }
        }
        if (+input.value !== +input.value) {
            return alert(prompt("Inserisci un numero"));
        }
    };
    input2.onkeyup = function keyup(e) {
        let inp = +input.value;
        if (e.key === "Enter") {
            let totale = samsung.carica += inp;
            let p = document.querySelector(".vedi-item2");
            if (p !== null) {
                p.innerHTML = totale.toString();
            }
        }
        if (+input.value !== +input.value) {
            return alert(prompt("Inserisci un numero"));
        }
    };
    input3.onkeyup = function keyup(e) {
        let inp = +input.value;
        if (e.key === "Enter") {
            let totale = haweii.carica += inp;
            let p = document.querySelector(".vedi-item3");
            if (p !== null) {
                p.innerHTML = totale.toString();
            }
        }
        if (+input.value !== +input.value) {
            return alert(prompt("Inserisci un numero"));
        }
    };
    // togli soldi function
    // contatore delle chiamate
    btn.onclick = function click() {
        if (iphone.carica > 0) {
            return iphone.Aggiungi();
        }
        else {
            return iphone.error404();
        }
    };
    btn2.onclick = function click2() {
        if (samsung.carica > 0) {
            samsung.Aggiungi();
        }
        else {
            return samsung.error404();
        }
    };
    btn3.onclick = function click3() {
        if (haweii.carica > 0) {
            haweii.Aggiungi();
        }
        else {
            return haweii.error404();
        }
    };
});
