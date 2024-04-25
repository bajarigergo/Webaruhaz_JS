import { LISTA } from "./adat.js";
import { kartyaLetrehoz, megjelenit, rendez } from "./listaMuveletek.js";


//megjelenit(kartyaLetrehoz(LISTA))

/* Amikor rákatt a kosárba gombra, 
akkor létrehozol obj: {index:3, db:1}
belepush a kosár listába vagy növel
*/



init(LISTA)
function init(lista) {

  let szoveg = kartyaLetrehoz(lista);
  megjelenit(szoveg);
  rendezEsemeny()
}

function rendezEsemeny() {
    const listaOpcioELEM = $(".rendez_select")
    listaOpcioELEM.on("change", function () {
        let ertek = listaOpcioELEM.val()
        console.log(ertek);
        if (ertek == 4) {
            const LISTA = rendez(LISTA,"nev", 1)
            init(LISTA)

        }
        if (ertek == 3) {
            const LISTA = rendez(LISTA,"nev", -1)
            init(LISTA)
        }

    })
}