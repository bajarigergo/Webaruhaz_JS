import { LISTA } from "./adat.js";
import { kartyaLetrehoz, megjelenit, rendez } from "./listaMuveletek.js";


//megjelenit(kartyaLetrehoz(LISTA))

/* Amikor rákatt a kosárba gombra, 
akkor létrehozol obj: {index:3, db:1}
belepush a kosár listába vagy növel
*/



function init(lista) {

  let szoveg = kartyaLetrehoz(lista);
  megjelenit(szoveg);
  rendezEsemeny(lista)
}
init(LISTA)


function rendezEsemeny(lista) {
    const listaOpcioELEM = $(".rendezes_select")
    //console.log(listaOpcioELEM.val())
    listaOpcioELEM.on("change", function () {

        if (listaOpcioELEM.val() === "novNev") {
            //console.log(listaOpcioELEM.val());
            const LISTA = rendez(lista,"nev", 1)
            init(LISTA)

        }
        if (listaOpcioELEM.val() === "csokkenNev") {
            //console.log(listaOpcioELEM.val());
            const LISTA = rendez(lista,"nev", -1)
            init(LISTA)
        }
        if (listaOpcioELEM.val() === "csokkenAr") {
            //console.log(listaOpcioELEM.val());
            const LISTA = rendez(lista,"ar", -1)
            init(LISTA)
        }
        if (listaOpcioELEM.val() === "novAr") {
            //console.log(listaOpcioELEM.val());
            const LISTA = rendez(lista,"ar", 1)
            init(LISTA)
        }
    })
}