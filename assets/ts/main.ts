interface ITelefono {

}
abstract class Telefono implements ITelefono {
    carica:number
    numeroChiamate:number
    constructor(carica:number,numeroChiamate:number,){
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
}
}
class mobile extends Telefono{
    Ricarica():number{
        let ric:number = <HTMLInputElement>  document.querySelector(".ric") ;
        let soldi:number =  this.carica += ric.value
        return document.querySelector(".vedi-item").innerHTML = soldi 
    }
    TogliSoldi(){
        let togli = this.carica - 0.20
        return togli
    }
    error404(){
    if (this.carica <= 0) {
        return alert ("Non puoi effettuare la chiamata")
    }
}
}

document.addEventListener("DOMContentLoaded", () => {
// let iphone = new mobile();
// let samsung = new mobile();
// let haweii = new mobile();
})