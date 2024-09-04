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

//étape 3

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

//étape 4

let infoUl = document.getElementById('info');

jsonDatas.forEach((article) => {
    let liElement = document.createElement('li');
    liElement.innerHTML =
        `Nom : ${article.name} <br>
         Type: ${article.type} <br>
         Description: ${article.description} <br>
         Price: ${article.price} <br>
         Quantity: ${article.quantity} <br> <br>`;
    infoUl.appendChild(liElement);

})

