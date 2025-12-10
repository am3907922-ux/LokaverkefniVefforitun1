function toggleMode(){
    document.querySelector("body").
    classList.toggle("body");
} 

/* Býr til takka fyrir hvert html dýr*/
const labradorBtn = document.getElementById("LabradorRetriever")
const borderBtn = document.getElementById("BorderCollie")
const pomeranianBtn = document.getElementById("Pomeranian")

const mainBtn = document.getElementById("MainCoon")
const siameseBtn = document.getElementById("Siamese")
const ragdollBtn = document.getElementById("Ragdoll")

const clownBtn = document.getElementById("Clownfish")
const bettaBtn = document.getElementById("Betta")
const goldBtn = document.getElementById("Goldfish")


/* hér er sett þig yfir á leiksíðuna þegar þú velurð gæludýr*/
labradorBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "LabradorRetriever")
    window.location.href = "game.html"
})

borderBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "BorderCollie")
    window.location.href = "game.html"
})

pomeranianBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "Pomeranian")
    window.location.href = "game.html"
})

mainBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "MainCoon")
    window.location.href = "game.html"
})

siameseBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "Siamese")
    window.location.href = "game.html"
})

ragdollBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "Ragdoll")
    window.location.href = "game.html"
})

clownBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "Clownfish")
    window.location.href = "game.html"
})

bettaBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "Betta")
    window.location.href = "game.html"
})

goldBtn.addEventListener("click", function() {
    localStorage.setItem("chosenPet", "Goldfish")
    window.location.href = "game.html"
})

/* Þetta eru öll dýrin sett í pets*/
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

