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

// const traducteur = {
//     car: "voiture",
//     show: "spectacle",
//     house: "maison",
//     game: "jeux",
//     videoGame: "jeux-vidéos"
// };
//
// //étape 3
//
// function afficheArticle() {
//     jsonDatas.forEach((article) => {
//
//         const traduction = traducteur[article.type];
//
//         console.log("Name: " + article.name);
//         console.log("Type: " + traduction);
//         console.log("Description: " + article.description);
//         console.log("Price: " + article.price);
//         console.log("Quantity: " + article.quantity);
//
//         console.log('--------------------');
//     });
// }

// afficheArticle();

//étape 4

// let infoUl = document.getElementById('info');
//
// jsonDatas.forEach((article) => {
//     let liElement = document.createElement('li');
//     liElement.innerHTML =
//         `Nom : ${article.name} <br>
//          Type: ${article.type} <br>
//          Description: ${article.description} <br>
//          Price: ${article.price} <br>
//          Quantity: ${article.quantity} <br> <br>`;
//     infoUl.appendChild(liElement);
//
// })
//etape 5

// function filterItems() {
//     // Récupérer la valeur entrée dans le champ texte (inputType) et la nettoyer
//     // 'trim()' enlève les espaces en début et fin de chaîne, 'toLowerCase()' met tout en minuscule
//     let infoType = document.getElementById('inputType');
//     let type = infoType.value.trim().toLowerCase();
//
//     //let outOfStock = document.getElementById('ruptureStock').checked;
//
//     // Utiliser la méthode .filter() pour parcourir le tableau jsonDatas et ne garder que les articles
//     // dont le type correspond à la valeur saisie par l'utilisateur
//     let listeArticles = jsonDatas.filter((article) => {
//         // Comparaison du type en minuscules pour éviter les erreurs de casse
//         return article.type.toLowerCase() === type;
//     });
//
//     // Appeler la fonction afficheDemande pour afficher les articles filtrés
//     afficheDemande(listeArticles);
// }
//
//
// function afficheDemande(listeArticles) {
//     // Récupérer l'élément UL où on va afficher les articles
//     let infoUl = document.getElementById('info');
//
//     // Vider l'élément UL pour supprimer les résultats précédents
//     infoUl.innerHTML = '';
//
//     // Vérifier si des articles ont été trouvés
//     if (listeArticles.length > 0) {
//         // Si des articles sont trouvés, parcourir la liste et créer des éléments DOM pour chaque article
//         listeArticles.forEach((article) => {
//             // Créer un élément 'li' pour chaque article grâce à la fonction createArticleDOM
//             let liElement = createArticleDOM(article);
//             // Ajouter chaque 'li' à l'élément UL (liste d'articles)
//             infoUl.appendChild(liElement);
//         });
//     } else {
//         // Si aucun article ne correspond, afficher un message d'erreur
//         infoUl.innerHTML = '<em>error</em>';
//     }
// }
//
//
// function createArticleDOM(article) {
//     // Créer un nouvel élément 'li'
//     let liElement = document.createElement('li');
//
//     // Ajouter du contenu HTML à cet élément avec les détails de l'article
//     liElement.innerHTML =
//         `Nom : ${article.name} <br>
//          Type: ${article.type} <br>
//          Description: ${article.description} <br>
//          Price: ${article.price} <br>
//          Quantity: ${article.quantity} <br><br>`;
//
//     // Retourner l'élément 'li' prêt à être ajouté dans la page
//     return liElement;
// }

// etape 6

document.getElementById('ruptureStock').addEventListener('change', filterItems); // Ajoute un listener pour la checkbox
function filterItems() {
    // Récupérer la valeur entrée dans le champ texte (inputType) et la nettoyer
    // 'trim()' enlève les espaces en début et fin de chaîne, 'toLowerCase()' met tout en minuscule
    let infoType = document.getElementById('inputType');
    let type = infoType.value.trim().toLowerCase();

    let outOfStock = document.getElementById('ruptureStock').checked;

    // Utiliser la méthode .filter() pour parcourir le tableau jsonDatas et ne garder que les articles
    // dont le type correspond à la valeur saisie par l'utilisateur
    let listeArticles = jsonDatas.filter((article) => {
        // Comparaison du type en minuscules pour éviter les erreurs de casse
        let typeMatch = article.type.toLowerCase() === type;
        let checkStock;
        if (outOfStock) {
            checkStock = true;
        } else {
            checkStock = article.quantity > 0;
        }
        return checkStock && typeMatch;
    });

    // Appeler la fonction afficheDemande pour afficher les articles filtrés
    afficheDemande(listeArticles);
}


function afficheDemande(listeArticles) {
    // Récupérer l'élément UL où on va afficher les articles
    let infoUl = document.getElementById('info');

    // Vider l'élément UL pour supprimer les résultats précédents
    infoUl.innerHTML = '';

    // Vérifier si des articles ont été trouvés
    if (listeArticles.length > 0) {
        // Si des articles sont trouvés, parcourir la liste et créer des éléments DOM pour chaque article
        listeArticles.forEach((article) => {
            // Créer un élément 'li' pour chaque article grâce à la fonction createArticleDOM
            let liElement = createArticleDOM(article);
            // Ajouter chaque 'li' à l'élément UL (liste d'articles)
            infoUl.appendChild(liElement);
        });
    } else {
        // Si aucun article ne correspond, afficher un message d'erreur
        infoUl.innerHTML = '<em>error</em>';
    }
}


function createArticleDOM(article) {
    // Créer un nouvel élément 'li'
    let liElement = document.createElement('li');

    // Ajouter du contenu HTML à cet élément avec les détails de l'article
    liElement.innerHTML =
        `Nom : ${article.name} <br>
         Type: ${article.type} <br>
         Description: ${article.description} <br>
         Price: ${article.price} <br>
         Quantity: ${article.quantity} <br><br>`;

    // Retourner l'élément 'li' prêt à être ajouté dans la page
    return liElement;
}
