"use strict";

// le copyright
let date = new Date().getFullYear();
let copyright = document.querySelector('#copyright').textContent = date + " © Aurelien Gallea";

// le pendu

const mots = ["aquarium", "scorpion", "triangle", "utopique", 
            "batterie", "logiciel", "ascenseur", "avalanche",
            "klaxonner", "mascarade", "horoscope", "tabouret",
            "cabriolet", "limite", "bouillotte", "grenouille",
            "cloche", "ananas", "arcade", "cabane", "bouche",
            "humour", "menthe", "rapide", "tomate", "oiseau",
            "poumon", "poulpe", "quartz", "puzzle", "walabi",
            "jargon", "gospel", "bronze", "acajou", "gifle", "koala",
            "capot", "bonne", "avion", "essai", "jambe", "chien", 
            "livre", "rugby", "conquistador", "chlorophylle",
            "abracadabra", "sorcellerie", "conspirateur" ];

let images = [];
images[0] = new Image();
images[0].src="./image/pendu-0.png";
images[1] = new Image();
images[1].src ="./image/pendu-1.png";
images[2] = new Image();
images[2].src ="./image/pendu-2.png";
images[3] = new Image();
images[3].src ="./image/pendu-3.png";
images[4] = new Image();
images[4].src ="./image/pendu-4.png";
images[5] = new Image();
images[5].src ="./image/pendu-5.png";
images[6] = new Image();
images[6].src ="./image/pendu-6.png";

// on créé nos interactions avec le DOM
let pendu   = document.querySelector("#pendu");
let mot     = document.querySelector("#mot");
let input   = document.querySelector("#texte-rempli");
let btn     = document.querySelector("button");
let non     = document.querySelector("#non");
let poisson = document.querySelector("#poisson");
let resultat = document.querySelector(".resultat");
let rejouer = document.querySelector("#rejouer");
let champs = document.querySelector("#champs");
let fish = document.querySelector("#flex-fish");

// un peu de sons
let pression = document.getElementById("#pression");

let clap = document.createElement('audio');
if(clap.canPlayType('audio/mpeg')) {
    clap.setAttribute('src','./audio/clap.mp3');
} else if (clap.canPlayType('audio/ogg')) {
    clap.setAttribute('src','./audio/clap.ogg');
}
let cri = document.createElement('audio');
if (cri.canPlayType('audio/mpeg')) {
    cri.setAttribute('src','./audio/cri-moins-fort.mp3');
} else if (cri.canPlayType('audio/ogg')) {
    cri.setAttribute('src','./audio/cri-moins-fort.ogg');
}

let nombreAleatoire;
let motAleatoire;
let motCache;
let score;
let reponse;
let dernier = 0;

jeu();

function reinitialisation() {
    motCache= [];
    score=0;
    pendu.src = images[score].src;
    non.innerHTML = "";
    non.style.display = "none";
    poisson.style.display = "none";
    resultat.style.display = "none";
    rejouer.style.display = "none";
    champs.style.display = "block";
    desactiverBattement();
}

function jeu() {
    reinitialisation();
    do {
        nombreAleatoire = genererNombreAleatoire(mots.length);
        console.log(mots[nombreAleatoire]);
        
    } while (dernier == nombreAleatoire);
    
    motAleatoire = mots[nombreAleatoire];
    
    for (let i = 0; i < motAleatoire.length; i++) {
        motCache[i] = motAleatoire[i].replace(/[a-z]/,"_");   
        mot.textContent = motCache.join(""); 
    }
    
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
    reponse = input.value;
    verifierCaractere();
    input.value = "";   
});
rejouer.addEventListener('click', () => {
    
    jeu()
});

// generer nombre aleatoire
function genererNombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function afficherResultat() {
    mot.textContent = motAleatoire;
    dernier = nombreAleatoire;
    champs.style.display = "none";
    resultat.style.display = "block";
    rejouer.style.display = "block"; 
}
function victoire() {
    desactiverBattement();
    clap.play();
    return resultat.innerHTML= "<p> Bravo ! Vous avez gagné avec : "  + score +  " erreurs</p>";       
}

function verifierCaractere() {

    if ( motAleatoire == reponse ) {
        victoire();
        afficherResultat();
        }

    if(motAleatoire.includes(reponse)) {
 
        for (let i=0; i<motAleatoire.length; i++) {
            
            if( motAleatoire[i] == reponse ) {
                
                motCache[i] = motAleatoire[i];   
                mot.textContent = motCache.join("");
                
            }
            if(mot.textContent == motAleatoire) {
                victoire();
                afficherResultat();
            }
        }
        
        
    } else {
        if (score < images.length-1) {
            score++
            changerPhoto();
            verifierScore(); 
        }
        
    }  
   
}

function changerPhoto() {
        
    pendu.src = images[score].src;
    non.innerHTML += reponse + " , ";
    poisson.style.display = "block";
    non.style.display = "block";
        
    }

function activerBattement() {
    input.className = "coeur";
    pression.play();
}

function desactiverBattement() {
    input.className="";
    pression.pause();
}

function verifierScore() {
    if(score >= images.length-3) {
        activerBattement();
        
    }
    if(score == images.length-1) {        
    resultat.innerHTML= "<p> Dommage ! Vous avez perdu, "+score+" erreurs</p>";
    desactiverBattement();
    cri.play();
    afficherResultat();
}
}



