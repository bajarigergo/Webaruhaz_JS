import { LISTA } from "./adat.js";
import {
  kartyaLetrehoz,
  megjelenitKartya,
  megjelenitTabla,
  rendez,
  szures,
  tablazatLetrehoz,
} from "./listaMuveletek.js";
import { sorBeszur, torol, torolEsemeny } from "./urlap.js";

//megjelenit(kartyaLetrehoz(LISTA))

/* Amikor rákatt a kosárba gombra, 
akkor létrehozol obj: {index:3, db:1}
belepush a kosár listába vagy növel
*/

export function init(lista) {
  let szoveg = kartyaLetrehoz(lista);
  megjelenitKartya(szoveg);
  let tablaszoveg = tablazatLetrehoz(lista)
  megjelenitTabla(tablaszoveg)
  sorBeszur(lista)
  rendezEsemeny(lista);
}
torolEsemeny(LISTA)
init(LISTA);
szuresNevSzerint();



function rendezEsemeny(lista) {
  const listaOpcioELEM = $(".rendezes_select");
  //console.log(listaOpcioELEM.val())
  listaOpcioELEM.on("change", function () {
    if (listaOpcioELEM.val() === "novNev") {
      //console.log(listaOpcioELEM.val());
      const LISTA = rendez(lista, "nev", 1);
      init(LISTA);
    }
    if (listaOpcioELEM.val() === "csokkenNev") {
      //console.log(listaOpcioELEM.val());
      const LISTA = rendez(lista, "nev", -1);
      init(LISTA);
    }
    if (listaOpcioELEM.val() === "csokkenAr") {
      //console.log(listaOpcioELEM.val());
      const LISTA = rendez(lista, "ar", -1);
      init(LISTA);
    }
    if (listaOpcioELEM.val() === "novAr") {
      //console.log(listaOpcioELEM.val());
      const LISTA = rendez(lista, "ar", 1);
      init(LISTA);
    }
  });
}
function szuresNevSzerint() {
  const szELEM = $("#sznev");
  szELEM.on("keyup", function () {
    let szoveg = szELEM.val();
    init(szures(LISTA, szoveg));
  });
}
