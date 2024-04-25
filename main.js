import { LISTA } from "./adat.js";
import { kartyaLetrehoz, megjelenit } from "./listaMuveletek.js";


megjelenit(kartyaLetrehoz(LISTA))

/* Amikor rákatt a kosárba gombra, 
akkor létrehozol obj: {index:3, db:1}
belepush a kosár listába vagy növel
*/