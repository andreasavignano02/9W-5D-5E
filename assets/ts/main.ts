// interface ITelefono {
// cosa serve l'interfaccia?
// }
abstract class Telefono{
    carica:number
    numeroChiamate:number
    constructor(carica:number,numeroChiamate:number,){
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
}
}
class mobile extends Telefono{ //perchè non funziona?
    Ricarica(){
        let ric = <HTMLInputElement>  document.querySelector(".ric") ;     
        let soldi:number =  this.carica + +ric.value //Number(ric.value) serve per modificare un tipo in un number 
        let es = <HTMLParagraphElement> document.querySelector(".vedi-item");
        if (es !== null){
        es.innerHTML = soldi.toString()
    }
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
    Aggiungi(){
        console.log(this.numeroChiamate++)
    }
}

document.addEventListener("DOMContentLoaded", () => {
let iphone = new mobile(0,0);
let samsung = new mobile(0,0);
let haweii = new mobile(0,0);

let btn = <HTMLButtonElement> document.querySelector(".iphone");
let btn2 = <HTMLButtonElement> document.querySelector(".samsung");
let btn3 = <HTMLButtonElement> document.querySelector(".haweii");
// contatore delle chiamate
btn.onclick = function click(){
   if (iphone.carica > 0){
    return iphone.Aggiungi()
}else {
    return iphone.error404()
} 
}

btn2.onclick = function click(){
    if (samsung.carica > 0){
    samsung.Aggiungi()
    }else{
    return samsung.error404()
    }
    }
btn3.onclick = function click(){
   if (haweii.carica > 0){
    haweii.Aggiungi()
   }else{
    return haweii.error404()
}
}
})
