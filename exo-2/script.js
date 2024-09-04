
// you can write js here
const isTesting = true;

let jourSemaine;
let heureActuelle;

 if (isTesting) {
     jourSemaine = parseInt(prompt("Entrer un jour de la semaine (1-5) lundi-vendredi"));
     heureActuelle = parseInt(prompt("L'heure actuelle 0-23"));
 } else {
     const myDate = new Date();
      jourSemaine = myDate.getDay();
     heureActuelle = myDate.getHours();
 }
const jourdelasemaine = "c'est bien un jour de la semaine";
const weekend = "et salut everybody tout le monde c'est le week-end";

if ((jourSemaine === 0) || (jourSemaine === 6) || (jourSemaine === 5 && heureActuelle > 17) || (jourSemaine === 1 && heureActuelle < 9) ) {
    console.log(weekend); // === check que la veleur et le type sont les memes

} else {
    console.log(jourdelasemaine);
}
    console.log('exo-2');