const chansons = [
  { titre: "Song 1", artiste: "Artiste A", duree: 210, genre: "Pop" },
  { titre: "Song 2", artiste: "Artiste B", duree: 180, genre: "Rock" },
  { titre: "Song 3", artiste: "Artiste C", duree: 200, genre: "Jazz" },
  { titre: "Song 4", artiste: "Artiste D", duree: 200, genre: "Jazz" },
  { titre: "Song 5", artiste: "Artiste E", duree: 200, genre: "Rock" },
  { titre: "Song 6", artiste: "Artiste F", duree: 200, genre: "Jazz" },
  { titre: "Song 7", artiste: "Artiste G", duree: 200, genre: "Oriental" },
  { titre: "Song 8", artiste: "Artiste H", duree: 200, genre: "Jazz" },
  { titre: "Song 9", artiste: "Artiste J", duree: 200, genre: "Occidental" },
  { titre: "Song 10", artiste: "Artiste K", duree: 200, genre: "Rigi" },
  
];


const titres = chansons.map(chanson => chanson.titre);

console.log(titres);


// ===================================Q2================================
const typeRock = chansons.filter(chansons => chansons.genre === "Rock");
console.log(typeRock);


// ===================================Q3================================
// ===================================Q4================================
// ===================================Q5================================
const plusLongue = chansons.reduce((max, chanson) => {
    if(chanson.duree > max.duree){
        return chanson;
    }
    else {
        return max;
    }
});
console.log(plusLongue);

// ===================================Q6================================
const toutesCourtes = chansons.every(chanson => chanson.duree < 360);
console.log(toutesCourtes);



// ===================================Q7================================
const aMoinJazz = chansons.some(chanson => chanson.genre === "Jazz");
console.log(aMoinJazz);


// ===================================Q8================================
const chansonsTriees = [...chansons].sort((a, b) => a.duree - b.duree);

console.log(chansonsTriees);