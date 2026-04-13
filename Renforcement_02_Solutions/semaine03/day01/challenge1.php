<?php

class Medicament {
    private string $nom;
    private string $reference;
    private float $prix_unitaire;
    private int $stock;
    private bool $ordonnance_requise;
    private DateTime $date_peremption;

    public function __construct(
        string $nom,
        string $reference,
        float $prix,
        int $stock,
        bool $ordonnance,
        DateTime $date_peremption
    ) {
        $this->nom = $nom;
        $this->reference = $reference;
        $this->setPrixUnitaire($prix);
        $this->setStock($stock);
        $this->ordonnance_requise = $ordonnance;
        $this->setDatePeremption($date_peremption);
    }

    public function setPrixUnitaire(float $prix): void {
        if ($prix <= 0) {
            throw new Exception("Le prix doit être positif");
        }
        $this->prix_unitaire = $prix;
    }

    public function setStock(int $stock): void {
        if ($stock < 0) {
            throw new Exception("Le stock ne peut pas être négatif");
        }
        $this->stock = $stock;
    }

    public function setDatePeremption(DateTime $date): void {
        $now = new DateTime();
        if ($date <= $now) {
            throw new Exception("La date de péremption doit être dans le futur");
        }
        $this->date_peremption = $date;
    }

    
    public function estPerime(): bool {
        return $this->date_peremption <= new DateTime();
    }

    
    public function dispenser(int $quantite, bool $ordonnanceFournie = false): void {
        if ($this->estPerime()) {
            throw new Exception("Médicament périmé");
        }

        if ($this->ordonnance_requise && !$ordonnanceFournie) {
            throw new Exception("Ordonnance requise");
        }

        if ($quantite > $this->stock) {
            throw new Exception("Stock insuffisant");
        }

        $this->stock -= $quantite;
    }

    
    public function getReference(): string {
        return $this->reference;
    }

    public function getStock(): int {
        return $this->stock;
    }
}



class Ordonnance {
    private string $numero;
    private string $medecin;
    private string $patient;
    private DateTime $date;

    
    private array $medicaments = [];

    public function __construct(string $numero, string $medecin, string $patient, DateTime $date) {
        $this->numero = $numero;
        $this->medecin = $medecin;
        $this->patient = $patient;
        $this->date = $date;
    }

    public function ajouterMedicament(string $reference, int $quantite): void {
        $this->medicaments[$reference] = $quantite;
    }

    public function getMedicaments(): array {
        return $this->medicaments;
    }
}



class Pharmacie {
    
    private array $stock = [];

    public function ajouterMedicament(Medicament $m): void {
        $this->stock[$m->getReference()] = $m;
    }

    public function preparerOrdonnance(Ordonnance $o): void {
        $meds = $o->getMedicaments();

        foreach ($meds as $ref => $quantite) {
            if (!isset($this->stock[$ref])) {
                throw new Exception("Médicament $ref introuvable");
            }

            $medicament = $this->stock[$ref];

            if ($medicament->estPerime()) {
                throw new Exception("Médicament $ref périmé");
            }

            if ($medicament->getStock() < $quantite) {
                throw new Exception("Stock insuffisant pour $ref");
            }
        }


        foreach ($meds as $ref => $quantite) {
            $this->stock[$ref]->dispenser($quantite, true);
        }
    }
}