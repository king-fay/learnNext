
interface ProductType{
  id : number;
  nom : string;
  description? : string;
  price : string;
  etat : "neuf" | "exprire"
}

function HomePage(){
  
  const produits: ProductType[] = [
    { id: 1, nom: "Montre Connectée", description: "Design élégant et fonctions santé.", price: "79.99€", etat: "neuf" },
    { id: 2, nom: "Écouteurs Sans Fil", description: "Son immersif et autonomie 24h.", price: "59.99€", etat: "neuf" },
    { id: 3, nom: "Sac à Dos Voyage", description: "Étanche avec compartiments multiples.", price: "49.90€", etat: "neuf" },
    { id: 4, nom: "Lampe de Bureau LED", description: "Réglable et faible consommation.", price: "24.50€", etat: "neuf" },
    { id: 5, nom: "Tapis de Souris Gamer", description: "Surface lisse et repose-poignet confortable.", price: "14.99€", etat: "neuf" },
    { id: 6, nom: "Coque Smartphone", description: "Protection renforcée anti-chute.", price: "12.90€", etat: "neuf" },
    { id: 7, nom: "Clavier Mécanique", description: "Rétroéclairé RGB et touches silencieuses.", price: "89.00€", etat: "neuf" },
    { id: 8, nom: "Câble USB-C", description: "Charge rapide et transfert 100W.", price: "9.99€", etat: "neuf" },
    { id: 9, nom: "Batterie Externe", description: "10 000 mAh pour recharger deux appareils.", price: "29.99€", etat: "neuf" },
    { id: 10, nom: "Haut-parleur Bluetooth", description: "Son stéréo et résistance à l'eau.", price: "34.90€", etat: "neuf" },
    { id: 11, nom: "Cafetière à Capsules", description: "Pratique et rapide pour le matin.", price: "69.90€", etat: "neuf" },
    { id: 12, nom: "Tasse Isotherme", description: "Garde les boissons chaudes 6h.", price: "19.90€", etat: "neuf" },
    { id: 13, nom: "Jeu de Société", description: "Soirées familiales garanties.", price: "22.50€", etat: "neuf" },
    { id: 14, nom: "Pochette Tablette", description: "Protection fine et légère.", price: "17.99€", etat: "neuf" },
    { id: 15, nom: "Chargeur Sans Fil", description: "Recharge compatible Qi.", price: "18.90€", etat: "neuf" },
    { id: 16, nom: "Étagère Murale", description: "Bois clair pour un style moderne.", price: "39.99€", etat: "neuf" },
    { id: 17, nom: "Tapis de Yoga", description: "Antidérapant et épais.", price: "25.00€", etat: "neuf" },
    { id: 18, nom: "Enceinte Portable", description: "Compacte et puissante.", price: "44.90€", etat: "neuf" },
    { id: 19, nom: "Couteau de Cuisine", description: "Lame professionnelle en acier inox.", price: "29.50€", etat: "neuf" },
    { id: 20, nom: "Agenda 2026", description: "Pages mensuelles et notes.", price: "12.50€", etat: "neuf" },
  ]


  return (
      <div className="flex flex-col overflow-y-auto min-w-full bg-blue-200 h-full justify-center items-center content-center p-10">
        
        <div className="bg-gray-500 rounded-3xl p-8">
          <h1 className="text-center text-3xl font-semibold">Bienvenue sur notre applications </h1>
        </div> 
        
        <div className="bg-blue-300 rounded-2xl p-8 m-20">
            <h1 className="text-2xl text-blue-900">La list de nos produits</h1>
            {produits.map((produit,index)=>(
              <div key={index} className="border h-16 mr-3 ml-3 p-3 w-200 hover:bg-blue-400 hover:scale-110 hover:rounded-2xl flex flex-col-2">
                <div>
                  <h2 className="font-bold">{produit.nom}</h2>
                  <p className="text-gray-600">{produit.description}</p>
                </div>
                <p className="right-0 ">{produit.price}</p>
              </div>
            ))
          }
        </div>

      </div>

  )
}


export default HomePage;