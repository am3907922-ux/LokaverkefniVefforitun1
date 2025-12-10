/* Þetta eru dýrin öll dýrin sett í pets*/
const pets = {
    "LabradorRetriever": {
        image: "labrador.jpg",
        hunger: 70,
        mood: 80,
        energy: 60
    },

    "BorderCollie": {
        image: "borderCollie.jpg",
        hunger: 65,
        mood: 85,
        energy: 70
    },

    "Pomeranian": {
        image: "pomeranian.jpg",
        hunger: 50,
        mood: 90,
        energy: 80
    },

    "MainCoon": {
        image: "mainCoon.jpg",
        hunger: 70,
        mood: 40,
        energy: 90
    },

    "Siamese": {
        image: "siamese.jpg",
        hunger: 80,
        mood: 50,
        energy: 80
    },

    "Ragdoll": {
        image: "ragdoll.jpg",
        hunger: 70,
        mood: 90,
        energy: 60
    },

    "Clownfish": {
        image: "clownFish.jpg",
        hunger: 50,
        mood: 90,
        energy: 80
    },

    "Betta": {
        image: "betta.jpg",
        hunger: 50,
        mood: 90,
        energy: 80
    },

    "Goldfish": {
        image: "goldFish.jpg",
        hunger: 50,
        mood: 90,
        energy: 80
    },
};

/* Nær í valið gæludýr úr geymslunni*/
const chosenPet = localStorage.getItem("chosenPet");

const selectedPet = pets[chosenPet];

/* Byrtir allar upplýsinga út frá gæludýrinu sem var valið*/
document.getElementById("pet-image").src = selectedPet.image;
document.getElementById("pet-message").innerText = "You chose " + chosenPet;

document.getElementById("hunger-fill").style.width = selectedPet.hunger + "%";
document.getElementById("mood-fill").style.width = selectedPet.mood + "%";
document.getElementById("energy-fill").style.width = selectedPet.energy + "%";


const feedBtn = document.getElementById("feedBtn");
