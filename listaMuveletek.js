export function kartyaLetrehoz(LISTA) {
  let txt;
  LISTA.forEach(element, (index) => {
    txt += `
        <div class="mt-3 col-4">
            <div class="card">
        <img
        class="card-img-top"
        src="${element.kep}"
        alt="Card image"
        style="width: 100%"
      />
      <div class="card-body">        
        <h4 class="card-title">${element.nev}</h4>
        <p class="card-text">Teljesítmény: ${element.telj}</p>
        <p class="card-text">Hajtáslánc: ${element.hajtas}</p>
        <p class="card-text">Ár: ${element.ar} Millió FT</p>
        <button id="gomb${index}" class="btn btn-secondary">
          Kosárba
        </button>
        </div>
    </div>
  </div>`;
  });
  return txt;
}
export function megjelenit(txt) {
  const ELEM = $(".termekek");
  ELEM.html(txt);
}
