// =========================1===========================
const users = [
    { id: 1, pseudo: "Ali", email: "ali@mail.com", role: "vendeur", note: 4.5, solde: 1000 },
    { id: 2, pseudo: "Sara", email: "sara@mail.com", role: "acheteur", note: 0, solde: 800 },
    { id: 3, pseudo: "Yassine", email: "yassine@mail.com", role: "vendeur", note: 4.8, solde: 500 },
    { id: 4, pseudo: "Lina", email: "lina@mail.com", role: "acheteur", note: 0, solde: 1200 },
    { id: 5, pseudo: "Omar", email: "omar@mail.com", role: "vendeur", note: 4.2, solde: 300 }
];

// =========================2===========================
const annonces = [];

function publierAnnonce(vendeurId, titre, description, prix, categorie, etat) {
    const vendeur = users.find(u => u.id === vendeurId && u.role === "vendeur");

    if (!vendeur) return console.log("Accès refusé");

    const annonce = {
        id: annonces.length + 1,
        vendeur_id: vendeurId,
        titre,
        description,
        prix,
        categorie,
        etat,
        statut: "disponible",
        date_publication: new Date()
    };

    annonces.push(annonce);
}

function modifierPrix(id, nouveauPrix) {
    const annonce = annonces.find(a => a.id === id);
    if (annonce) annonce.prix = nouveauPrix;
}

function retirerAnnonce(id) {
    const index = annonces.findIndex(a => a.id === id);
    if (index !== -1) annonces.splice(index, 1);
}

// =========================3===========================



function rechercherAnnonces(filtres) {
  return annonces
    .filter(a => !filtres.motCle || 
      a.titre.includes(filtres.motCle) || 
      a.description.includes(filtres.motCle))
    .filter(a => !filtres.categorie || a.categorie === filtres.categorie)
    .filter(a => !filtres.prixMin || a.prix >= filtres.prixMin)
    .filter(a => !filtres.prixMax || a.prix <= filtres.prixMax)
    .filter(a => !filtres.etat || a.etat === filtres.etat)
    .filter(a => !filtres.vendeurId || a.vendeur_id === filtres.vendeurId)
    .sort((a, b) => {
      if (filtres.tri === "prix") return a.prix - b.prix;
      if (filtres.tri === "date") return new Date(b.date_publication) - new Date(a.date_publication);
      if (filtres.tri === "note") {
        const vendeurA = users.find(u => u.id === a.vendeur_id);
        const vendeurB = users.find(u => u.id === b.vendeur_id);
        return vendeurB.note - vendeurA.note;
      }
      return 0;
    });
}