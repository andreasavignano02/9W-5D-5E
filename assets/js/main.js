"use strict";
class Telefono {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
}
class mobile extends Telefono {
    Ricarica() {
        let ric = document.querySelector(".ric");
        let soldi = this.carica += ric.value;
        return document.querySelector(".vedi-item").innerHTML = soldi;
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
}
document.addEventListener("DOMContentLoaded", () => {
    // let iphone = new mobile();
    // let samsung = new mobile();
    // let haweii = new mobile();
});
