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
            let validak = false
            for (let index = 0; index < 5; index++) {
                if($(".valid-feedback").eq(index).css("display") === "block"){
                    validak = true
                }
                
            }
            if (validak) {
                lista.push(adat);
                    init(lista)
                    console.log(adat);
            }
 
        });
    }
    export function szemelyesConsolra() {
        const submitELEM = $("#szemelyes");
        submitELEM.on("click", function(event){
            event.preventDefault();

            const adat = {
                varos: $("#varos").val(),
                utca: $("#utca").val(),
                irszam: $("#irszam").val(),
                nev: $("#nev").val(),
                kor: $("#kor").val(),
            };
            console.log($(".valid-feedback").eq(0).css("display"))
            let validak = false
            for (let index = 0; index < 5; index++) {
                if($(".valid-feedback").eq(index).css("display") === "block"){
                    validak = true
                }
                
            }
            if (validak) {
                    console.log(adat);
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
