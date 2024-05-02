import { init } from "./main.js";

    export function sorBeszur(lista){
        
        const submitELEM = $("#submit");
        submitELEM.on("click", function(event){
            event.preventDefault();

            const adat = {
                nev: $("#nev").val(),
                telj: $("#telj").val(),
                hajtas: $("#hajtas").val(),
                ar: $("#ar").val(),
                kep: $("#kep").val()
            };
            console.log($(".valid-feedback").eq(0).css("display"))
            if($(".valid-feedback").eq(0).css("display") === "block" && 
            $(".valid-feedback").eq(1).css("display") === "block"){
                lista.push(adat);
                init(lista)
            }
        });
    }
    export function torol(lista, index){
        lista.splice(index, 1);
        return lista;
    }
    export function torolEsemeny(lista) {
        const TOROL_ELEM = $(".torol");
        TOROL_ELEM.on("click", function (evt) {
          let index = evt.target.id;
          console.log(index);
          const UJ_LISTA = termekTorles(lista, index);
          init(UJ_LISTA);
        });
      }
