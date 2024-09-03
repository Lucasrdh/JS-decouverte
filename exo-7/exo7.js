console.log("exo-7");

console.log(jsonDatas);
//étape 1
//function afficheArticle(){
//	 jsonDatas.forEach((article) => {
//		 console.log(article)
//	 });
//}
//afficheArticle();

//étape 2
const traducteur = {
    car: "voiture",
    show: "spectacle",
    house: "maison",
    game: "jeux",
    videoGame: "jeux-vidéos"
};

function afficheArticle() {
    jsonDatas.forEach((article) => {

        const traduction = traducteur[article.type];

        console.log("Name: " + article.name);
        console.log("Type: " + traduction);
        console.log("Description: " + article.description);
        console.log("Price: " + article.price);
        console.log("Quantity: " + article.quantity);

        console.log('--------------------');
    });
}
afficheArticle();
