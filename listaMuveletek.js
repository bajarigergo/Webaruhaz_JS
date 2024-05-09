export function kartyaLetrehoz(LISTA) {
  let txt = "";
  LISTA.forEach((elem, index) => {
    txt += `
        <div class="col-sm-5 m-3 p-0 col-lg-3 card">
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
export function tablazatLetrehoz(lista) {
  let txt = `<div class="table-responsive">
        <table class="table table-striped">
        <thead>
        <tr>
        <th>Név</th>
        <th>Teljesítmény</th>
        <th>Hajtás</th>
        <th>Ár</th>
        <th>Kép</th>
        <th></th>
        </tr>
        </thead>
        <tbody>
  `;
  lista.forEach((element, index) => {
    txt += `
        <tr>
            <td>${element.nev}</td>
            <td>${element.telj}</td>
            <td>${element.hajtas}</td>
            <td>${element.ar}</td>
            <td><img src='${element.kep}' alt='auto' style= 'width:100px'></td>
            <td id="torol${index}"><button>🗑️</button></td>
        </tr>
    `;
  });
  txt += "</tbody></table></div>";
  return txt;
}

export function megjelenitKartya(txt) {
  const ELEM = $(".termekek");
  ELEM.html(txt);
}
export function megjelenitTabla(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}

export function kosarba(VASAROLT) {
  
}

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