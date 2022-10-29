"use strict";
// interface ITelefono {
// cosa serve l'interfaccia?
// }
class Telefono {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
}
class mobile extends Telefono {
    Ricarica() {
        let ric = document.querySelector(".ric");
        let soldi = this.carica + +ric.value; //Number(ric.value) serve per modificare un tipo in un number 
        let es = document.querySelector(".vedi-item");
        if (es !== null) {
            es.innerHTML = soldi.toString();
        }
    }
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
    let iphone = new mobile(0, 0);
    let samsung = new mobile(0, 0);
    let haweii = new mobile(0, 0);
    let btn = document.querySelector(".iphone");
    let btn2 = document.querySelector(".samsung");
    let btn3 = document.querySelector(".haweii");
    btn.onclick = function click() {
        iphone.Aggiungi();
    };
    btn2.onclick = function click() {
        samsung.Aggiungi();
    };
    btn3.onclick = function click() {
        haweii.Aggiungi();
    };
});
