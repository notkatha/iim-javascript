// JavaScript - Concepts de Base

// ---- Variables ----
let variableLet = "Je suis une variable let";
const variableConst = "Je suis une constante";

// ---- Structures de Données ----
// Array
let monArray = ["pomme", "banane", "cerise"];
monArray.push("orange");

// Object
let monObjet = { nom: "Dupont", prenom: "Jean", age: 30 };
monObjet.age = 31;

// ---- Fonctions ----
// Fonction Déclarative
function maFonction() {
  return "Fonction déclarative";
}

// Fonction Fléchée
const fonctionFlechee = () => "Fonction fléchée";

// ---- Sélecteurs DOM ----
const elementById = document.getElementById("monId");

// ---- Gestion des Événements ----
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("monBouton").addEventListener("click", () => {
    console.log("Bouton cliqué");
  });
});

// ---- Boucles ----
// forEach sur Array
monArray.forEach((item) => console.log(item));

// for classique
for (let i = 0; i < monArray.length; i++) {
  console.log(monArray[i]);
}

// ---- Gestion des erreurs ----
try {
  // Code potentiellement erroné
} catch (error) {
  console.error("Erreur capturée:", error);
}
