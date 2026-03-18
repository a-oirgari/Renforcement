// ================================Q1========================
const contacts = [
    {
        nom: "Dupont",
        entreprise: "TechCorp",
        email: "dupont@techcorp.com",
        telephone: "0612345678",
        ville: "Casablanca",
        adresse: {
            rue: "12 Boulevard Zerktouni",
            code_postal: "20000",
            ville: "Casablanca",
            pays: "Maroc"
        }
    },
    {
        nom: "Martin",
        entreprise: "Innovatech",
        email: "martin@innovatech.com",
        telephone: "0623456789",
        ville: "Rabat",
        adresse: {
            rue: "45 Avenue Mohammed V",
            code_postal: "10000",
            ville: "Rabat",
            pays: "Maroc"
        }
    },
    {
        nom: "Benali",
        entreprise: "WebSolutions",
        email: "benali@websolutions.ma",
        telephone: "0634567890",
        ville: "Marrakech",
        adresse: {
            rue: "78 Rue Majorelle",
            code_postal: "40000",
            ville: "Marrakech",
            pays: "Maroc"
        }
    },
    {
        nom: "Lefevre",
        entreprise: "DataCorp",
        email: "lefevre@datacorp.com",
        telephone: "0645678901",
        ville: "Tanger",
        adresse: {
            rue: "9 Avenue Pasteur",
            code_postal: "90000",
            ville: "Tanger",
            pays: "Maroc"
        }
    },
    {
        nom: "Haddad",
        entreprise: "CloudNet",
        email: "haddad@cloudnet.ma",
        telephone: "0656789012",
        ville: "Fès",
        adresse: {
            rue: "22 Rue Hassan II",
            code_postal: "30000",
            ville: "Fès",
            pays: "Maroc"
        }
    },
    {
        nom: "Nguyen",
        entreprise: "GlobalTech",
        email: "nguyen@globaltech.com",
        telephone: "0667890123",
        ville: "Agadir",
        adresse: {
            rue: "5 Avenue des FAR",
            code_postal: "80000",
            ville: "Agadir",
            pays: "Maroc"
        }
    }
];

console.log(contacts);

// ================================Q2========================
contacts.forEach(contact => {
    console.log(`Nom: ${contact.nom} et Ville: ${contact.ville}`);
});


// ================================Q2========================
const contactsParVille = {};

contacts.forEach(contact => {
    if (!contactsParVille[contact.ville]) {
        contactsParVille[contact.ville] = [];
    }

    contactsParVille[contact.ville].push(contact.nom);
});

console.log(contactsParVille);




// ================================Q4========================

function trouverParEntreprise(entreprise) {
    return contacts.filter(contact => contact.entreprise === entreprise);
}

// ================================Q5========================

function modifierAdresse(nom, nouvelleAdresse) {
    const contact = contacts.find(c => c.nom === nom);

    if (contact) {
        contact.adresse = nouvelleAdresse;
    } else {
        console.log("Contact non trouvé");
    }
}

// Exemple 
modifierAdresse("Dupont", {
    rue: "99 Rue Nouvelle",
    code_postal: "20100",
    ville: "Casablanca",
    pays: "Maroc"
});

console.log(contacts);