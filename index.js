'use strict';

var listeAchat = ['Pomme', 'Banane', 'Tomate', 'Lait', 'Oeufs', 'Chocolat'];
var verifSuppProduit = false;
console.log(listeAchat);



function ajouterUnProduit(params) {
    listeAchat.push(n)  ;
};

function supprimerUnProduit(params) {
  let s;
  if (verifSuppProduit == true) {
    s = window.prompt('Introduire un element valide a supprimer');
  }
  else{
   s = window.prompt('Introduire un element a supprimer');
  }
  
  let verif = false;
  
    
    let i = listeAchat.indexOf(s) ;
    if (s == listeAchat[i]) {
      var pos = listeAchat.indexOf(s);
      var removedItem = listeAchat.splice(pos, 1);
      verif = true;
    }
    
  
   if (verif == false){
    verifSuppProduit = true;
    supprimerUnProduit(params);
   }
}


function supprimerTout(params) {
  
  listeAchat.splice(0, listeAchat.length);
};

let n = window.prompt('Introduire un element a ajouter');
let question = window.prompt('voulez-vous supprimer un produit ? repondez par OUI ou NON');
question = question.toUpperCase();
if (question == 'OUI'){
  supprimerUnProduit();
}
console.log(listeAchat);
document.write('<br>',listeAchat,'<br>');
console.log(listeAchat.length);
document.write(listeAchat.length);

ajouterUnProduit();

console.log(listeAchat);
document.write('<br>',listeAchat,'<br>');
supprimerTout();
console.log('Resultat tableau vide',listeAchat);
document.write('<br> Resultat tableau vide',listeAchat);
console.log('Le Tableau contient ',listeAchat.length,' element');
document.write('<br> Le Tableau contient ',listeAchat.length,' element');