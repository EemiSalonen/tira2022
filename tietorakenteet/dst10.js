/* Matriisi (eng. Matrix) on taulukko tietorakenteen muunnos. Se koostoo taulukosta, jonka sisälle on sijoitettu lisää taulukoita.
Näiden avulla on mahdollista kuvata data koordinaatistossa muodostamalla x ja y rivit ja kolumnit: */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][1]);

/* 

  Esimerkissä otetaan ylemmän taulukon indeksistä 0, joka toimii ensimmäisenä rivinä, taulukko, josta puolestaan valitaan sen
  toisessa alkiossa oleva arvo. 

  Matriisejä käytetään esimerkiksi 3D grafiikkojen piirtämiseksi 2D näytöille. Matriisia voin käyttää myös eräänlaisia ohjeena, kun 
  piirretään asioita 2D alustalle käyttäen sitä koordinaatistona. 
  
*/
