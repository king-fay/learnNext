
  export interface ProductType{
  id : number;
  nom : string;
  description? : string;
  price : string;
  etat : "neuf" | "exprire";
  quandite : number;
}

export interface CreateProd{
  id? : number,
  nom? : string,
  description?: string,
  price? : string;
  etat : "neuf";
  quantite? : string;
}
  
  export const produits: ProductType[] = [
    { id: 1, nom: "Montre Connectée", description: "Design élégant et fonctions santé.", price: "79.99€", etat: "neuf", quandite: 15 },
    { id: 2, nom: "Écouteurs Sans Fil", description: "Son immersif et autonomie 24h.", price: "59.99€", etat: "neuf", quandite: 28 },
    { id: 3, nom: "Sac à Dos Voyage", description: "Étanche avec compartiments multiples.", price: "49.90€", etat: "neuf", quandite: 12 },
    { id: 4, nom: "Lampe de Bureau LED", description: "Réglable et faible consommation.", price: "24.50€", etat: "neuf", quandite: 35 },
    { id: 5, nom: "Tapis de Souris Gamer", description: "Surface lisse et repose-poignet confortable.", price: "14.99€", etat: "neuf", quandite: 42 },
  ]/*
    { id: 6, nom: "Coque Smartphone", description: "Protection renforcée anti-chute.", price: "12.90€", etat: "neuf", quandite: 67 },
    { id: 7, nom: "Clavier Mécanique", description: "Rétroéclairé RGB et touches silencieuses.", price: "89.00€", etat: "neuf", quandite: 8 },
    { id: 8, nom: "Câble USB-C", description: "Charge rapide et transfert 100W.", price: "9.99€", etat: "neuf", quandite: 95 },
    { id: 9, nom: "Batterie Externe", description: "10 000 mAh pour recharger deux appareils.", price: "29.99€", etat: "neuf", quandite: 31 },
    { id: 10, nom: "Haut-parleur Bluetooth", description: "Son stéréo et résistance à l'eau.", price: "34.90€", etat: "neuf", quandite: 22 },
    { id: 11, nom: "Cafetière à Capsules", description: "Pratique et rapide pour le matin.", price: "69.90€", etat: "neuf", quandite: 9 },
    { id: 12, nom: "Tasse Isotherme", description: "Garde les boissons chaudes 6h.", price: "19.90€", etat: "neuf", quandite: 48 },
    { id: 13, nom: "Jeu de Société", description: "Soirées familiales garanties.", price: "22.50€", etat: "neuf", quandite: 18 },
    { id: 14, nom: "Pochette Tablette", description: "Protection fine et légère.", price: "17.99€", etat: "neuf", quandite: 34 },
    { id: 15, nom: "Chargeur Sans Fil", description: "Recharge compatible Qi.", price: "18.90€", etat: "neuf", quandite: 55 },
    { id: 16, nom: "Étagère Murale", description: "Bois clair pour un style moderne.", price: "39.99€", etat: "neuf", quandite: 11 },
    { id: 17, nom: "Tapis de Yoga", description: "Antidérapant et épais.", price: "25.00€", etat: "neuf", quandite: 27 },
    { id: 18, nom: "Enceinte Portable", description: "Compacte et puissante.", price: "44.90€", etat: "neuf", quandite: 19 },
    { id: 19, nom: "Couteau de Cuisine", description: "Lame professionnelle en acier inox.", price: "29.50€", etat: "neuf", quandite: 14 },
    { id: 20, nom: "Agenda 2026", description: "Pages mensuelles et notes.", price: "12.50€", etat: "neuf", quandite: 62 },
    { id: 21, nom: "Souris Sans Fil", description: "Ergonomique avec batterie longue durée.", price: "19.99€", etat: "neuf", quandite: 38 },
    { id: 22, nom: "Adaptateur HDMI", description: "Supporte 4K à 60Hz.", price: "14.90€", etat: "neuf", quandite: 51 },
    { id: 23, nom: "Lunettes Anti-lumière", description: "Filtre lumière bleue pour écran.", price: "24.99€", etat: "neuf", quandite: 29 },
    { id: 24, nom: "Ventilateur USB", description: "Silencieux et compact.", price: "12.50€", etat: "neuf", quandite: 73 },
    { id: 25, nom: "Housse Laptop", description: "Rembourrage protecteur pour 15 pouces.", price: "22.90€", etat: "neuf", quandite: 16 },
    { id: 26, nom: "Brosse Cheveux Ionique", description: "Réduit les frisottis naturellement.", price: "34.99€", etat: "neuf", quandite: 24 },
    { id: 27, nom: "Miroir LED", description: "Éclairage doux pour coiffeuse.", price: "39.90€", etat: "neuf", quandite: 13 },
    { id: 28, nom: "Spray Nettoyant Écran", description: "Sans silicone, sèchage rapide.", price: "8.99€", etat: "neuf", quandite: 88 },
    { id: 29, nom: "Câble Chargeur Renforcé", description: "Durabilité garantie 5 ans.", price: "11.99€", etat: "neuf", quandite: 79 },
    { id: 30, nom: "Porte-téléphone Auto", description: "Ventilation air avec adhésif fort.", price: "13.90€", etat: "neuf", quandite: 46 },
    { id: 31, nom: "Thermostat Connecté", description: "Contrôle température par app mobile.", price: "99.99€", etat: "neuf", quandite: 5 },
    { id: 32, nom: "Ampoule LED Intelligente", description: "16 millions de couleurs, contrôle vocal.", price: "19.50€", etat: "neuf", quandite: 40 },
    { id: 33, nom: "Caméra de Surveillance", description: "Vision nocturne et détection mouvement.", price: "59.90€", etat: "neuf", quandite: 7 },
    { id: 34, nom: "Sonnette Vidéo", description: "Appel vidéo en direct du téléphone.", price: "69.99€", etat: "neuf", quandite: 6 },
    { id: 35, nom: "Serrure Intelligente", description: "Accès par code ou empreinte digitale.", price: "119.99€", etat: "neuf", quandite: 3 },
    { id: 36, nom: "Détecteur de Fumée", description: "Alerte sur smartphone incluse.", price: "39.90€", etat: "neuf", quandite: 10 },
    { id: 37, nom: "Prise Intelligente", description: "Contrôle consommation énergétique.", price: "15.99€", etat: "neuf", quandite: 58 },
    { id: 38, nom: "Humidificateur Air", description: "Brume froide pour 15h de fonctionnement.", price: "29.99€", etat: "neuf", quandite: 17 },
    { id: 39, nom: "Purificateur Air", description: "Filtre HEPA haute performance.", price: "79.90€", etat: "neuf", quandite: 4 },
    { id: 40, nom: "Diffuseur Aromatique", description: "LED multicolore et ultrasons.", price: "18.90€", etat: "neuf", quandite: 36 },
    { id: 41, nom: "Coussin Cervical", description: "Mousse mémoire adaptative.", price: "32.50€", etat: "neuf", quandite: 21 },
    { id: 42, nom: "Matelas Massant", description: "10 programmes de massage différents.", price: "89.99€", etat: "neuf", quandite: 2 },
    { id: 43, nom: "Ceinture Lombaire", description: "Soutien ferme pour le dos.", price: "28.90€", etat: "neuf", quandite: 25 },
    { id: 44, nom: "Ballon de Fitness", description: "Anti-éclatement, 65cm diamètre.", price: "21.99€", etat: "neuf", quandite: 33 },
    { id: 45, nom: "Haltères Ajustables", description: "20kg avec rangement compact.", price: "54.90€", etat: "neuf", quandite: 9 },
    { id: 46, nom: "Corde à Sauter", description: "Compte les sauts, poignée ergonomique.", price: "16.99€", etat: "neuf", quandite: 44 },
    { id: 47, nom: "Bande Élastique Fitness", description: "Ensemble de 3 résistances différentes.", price: "12.99€", etat: "neuf", quandite: 71 },
    { id: 48, nom: "Bouteille Hydratation", description: "1 litre avec marquages temps boire.", price: "17.50€", etat: "neuf", quandite: 53 },
    { id: 49, nom: "Montre Sportive", description: "GPS, fréquence cardiaque, 30 sports.", price: "129.99€", etat: "neuf", quandite: 6 },
    { id: 50, nom: "Casque Audio Bluetooth", description: "Annulation bruit active, 30h autonomie.", price: "99.99€", etat: "neuf", quandite: 11 },
    { id: 51, nom: "Stylet pour Tablette", description: "Pression 4096 niveaux de sensibilité.", price: "42.90€", etat: "neuf", quandite: 14 },
    { id: 52, nom: "Support Téléphone Bureau", description: "Rotatif 360°, base antidérapante.", price: "11.99€", etat: "neuf", quandite: 65 },
  ]


*/