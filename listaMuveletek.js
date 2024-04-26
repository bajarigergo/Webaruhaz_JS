export function kartyaLetrehoz(LISTA) {
  let txt = "";
  LISTA.forEach((elem, index) => {
    txt += `
        <div class="m-3 p-0 col-3 card">
        <img
        class="card-img-top"
        src="${elem.kep}"
        alt="Card image"
        style="width: 100%"
      />
      <div class="card-body d-flex flex-column justify-content-around">        
        <h4 class="card-title nev">${elem.nev}</h4>
        <p class="card-text">Teljesítmény: ${elem.telj} lőerő</p>
        <p class="card-text">Hajtáslánc: ${elem.hajtas}</p>
        <p class="card-text">Ár: ${elem.ar} Millió FT</p>
        <button id="gomb${index}" class="btn btn-secondary align-self-start">
          Kosárba
        </button>
        </div>
  </div>`;
  });
  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".termekek");
  ELEM.html(txt);
}

export function kosarba(VASAROLT) {}

export function rendez(lista, kulcs, rIrany) {
  const RLISTA = lista.sort(function (e1,e2) {
      //returnbe negatív vagy poz érték kell
      // a nev szöveges változó, ezért < > értelmezhető

      return e1[kulcs]<e2[kulcs]?-1*rIrany:1*rIrany   
  })
  
  return RLISTA
}
export function szures(lista, keresoSzoveg) {
  const szLISTA = lista.filter(function (termek) {
      return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase()) ||
      termek.hajtas.toUpperCase().includes(keresoSzoveg.toUpperCase())

  })
  return szLISTA
}