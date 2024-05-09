## Függvények:

#### kartyaLetrehoz(lista):
- Lista a paramétere, visszatérési értéke txt
- txt tartalma a kártya amit majd egy a megjelenit függvény kap meg paraméterül és jeleníti meg
#### megjelenitKartya(txt):
- txt a paramétere
- eljárás
- a "termekek" osztályú div-be elhelyezi a paraméterét
#### rendez(lista, kulcs, rIrany):
- paraméterei: lista --> amit rendeznie kell, kulcs (String) --> ami szerint kell rendeznie (pl.: név), rIrany (int) --> növekvő(1) vagy csökkenő(-1) sorrendet határozza meg
- Visszatérési értéke: RLISTA ami a rendezett listát tartalmazza
#### szures(lista, keresoSzoveg):
- paramétere a lista ami szerint megjelenítjük a kártyákat
- másik paramétere a "keresoSzoveg" ami egy input tartalma
- funkciója megtalálni azokat az elemeket a listában amik megegyeznek az inputba beírt szöveggel, kis és nagy betűkre is kell működnie
- visszatérési értéke egy szűrt lista --> szLista néven
- #### sorBeszur(lista):
- Ellenőrzi hogy az admin oldlara felvitt adatok helyesek-e
- ha helyesek beszúrja a listába majd megjeleníti az admin oldalon lévő táblázatban
- #### szemelyesConsolra():
- Ha a személyes oldalon lévő adatok helyesek miután a "Mentés" gombra kattintunk akkor konzolra kiírja a felvitt adatokat
- #### tablazatLetrehoz(lista)
- lista a paramétere
- A táblázat megjelenítésére megfelelő html kód a visszatérési értéke
- #### megjelenitTabla(txt):
- txt a paramétere ami tartalmazza a táblázat html kódját
- admin oldalon jeleníti meg az adatokat
- #### torolEsemeny(lista):
- az admin oldalon a "🗑" gombra kattintva törli az elemet a listából
- #### szuresNevSzerint():
- Az index oldalon a ha "Szűrési lehetőségek" nevű bemenetbe írt szöveg egyezik a listában lévő tagok nevével vagy a hajtáslánccal akkor csak azokat az elemeket jeleníti meg az oldal
- 
