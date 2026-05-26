"use client";

import { useState } from "react";
import { ProductType,CreateProd ,produits} from "@/data";
import {Trash} from "lucide-react";
import { FaPen,FaPlus } from "react-icons/fa";
import { ModalSetProduit } from "@/components/modalsetProduit";



function HomePage(){

  const [ajoutable,setAjoutable] = useState(false);
  const [isclose, setIsClose] = useState(true);

  const [produit_list, setProduit_list] = useState(produits);
  const [nouveaup, setNouveauP] = useState({
    nom : "",
    description : "",
    price : "",
    etat : "neuf",
    quandite : 0
  });

  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(null);

  function supprimer(id : number){
    setProduit_list(produit_list.filter((produit)=>produit.id !== id));
  }

  function Ajouter(){
    if (!ajoutable) return ;
    setProduit_list([...produit_list, {...nouveaup,id : produit_list.length,etat:"neuf"}])
    setNouveauP({
    nom : "",
    description : "",
    price : "",
    etat : "neuf",
    quandite : 0
  })
    setAjoutable(false);

  }


  function modifier(produit : ProductType){
    setCurrentProduct(produit);
    setIsClose(false);
  }

  function EnrModif(produit : ProductType){
    let nouvel = produit_list.filter((prod)=>prod.id !=produit.id);
    nouvel = [produit, ...nouvel];
    setProduit_list(nouvel);
    setIsClose(true);
  }

  const fermer =()=>{
    setIsClose(true);
  }

  return (
      <div className="flex flex-col overflow-y-auto min-w-full bg-blue-200 h-full justify-center items-center content-center p-10">
        
        <div className="bg-gray-500 rounded-3xl p-8">
          <h1 className="text-center text-3xl font-semibold">Bienvenue sur notre applications </h1>
        </div> 
        <button className="bg-green-600 rounded-3xl text-2xl mt-5 right-0 p-5" 
          onClick={()=>setAjoutable(!ajoutable)}
        >
            Ajouter
        </button>

        {ajoutable && <div className="bg-gray-400 rounded-3xl p-8 mt-5">
          <h2 className="text-center text-3xl font-semibold">Ajouter un produit </h2>
          <div className="bg-gray-300 rounded-3xl p-8 m-10 flex flex-col gap-5">
            <label htmlFor="nom" className="mt-5">Nom </label>
            <input type="text" name="nom" placeholder="Le nom du produit" title="Nom" className="mt-2 border border-blue-600 rounded-2xl h-10 p-3" required
              value={nouveaup.nom}
              onChange={(e)=> setNouveauP({...nouveaup,nom: e.target.value}) }
            />

            <label htmlFor="desc" className="mt-2">Decriptions </label>
            <input type="text" name="desc" placeholder="Decription(optionel)" title="Nom" className="mt-2 border border-blue-600 rounded-2xl h-10 p-3"
              value={nouveaup.description}
              onChange={(e)=> setNouveauP({...nouveaup,description: e.target.value}) }/>

            <label htmlFor="prix" className="mt-2">Prix </label>
            <input type="text" name="prix" placeholder="Le Prix du produit" title="Nom" className="mt-2 border border-blue-600 rounded-2xl h-10 p-3" required
              value={nouveaup.price}
              onChange={(e)=> setNouveauP({...nouveaup,price: e.target.value}) }/>


            <label htmlFor="qt" className="mt-2">Qantite </label>
            <input type="number" name="qt" placeholder="Le quantite du produit" title="quantite" className="mt-2 border border-blue-600 rounded-2xl h-10 p-3" min={0} max={100}
              value={nouveaup.quandite}
              onChange={(e)=> setNouveauP({...nouveaup,quandite: parseInt(e.target.value)}) }/>

            <button className="bg-blue-700 rounded-3xl text-2xl mt-5 p-4 flex flex-row" 
              onClick={()=>Ajouter()}
            >
                <FaPlus />Ajouter
            </button>
          </div>
        </div> }

        <div className="bg-blue-300 rounded-2xl p-8 m-20">
            <h1 className="text-2xl text-blue-900 text-center">La liste de nos produits</h1>
            <div className="border-2 h-20 mr-3 ml-3 p-3 w-300  rounded-t-2xl grid grid-cols-5 grid-rows-1">
              <h2>Nom</h2>
              <h2>Description</h2>
              <h2>Prix</h2>
              <h2>Quantite</h2>
              <h2>Actions</h2>
            </div>
            {produit_list.map((produit,index)=>(
              <div key={index} className="border h-16 mr-3 ml-3 p-3 w-300 hover:bg-blue-400 hover:scale-110 hover:rounded-2xl grid grid-cols-5 grid-rows-1">
                  <h2 className="font-bold">{produit.nom}</h2>
                  <p className="text-gray-600">{produit.description}</p>
                  <p className="right-0 ">{produit.price}</p>
                  <p className="">{produit.quandite}</p>
                  <div className="">


                    <button className="text-center content-center items-center justify-items-center mr-10" type="button"
                      onClick={()=>supprimer(produit.id)}>
                        <Trash className="text-center" size={24} />
                    </button>


                    {/*Button modifier*/}
                    <button className="text-center content-center items-center justify-items-center" type="button"
                    onClick={()=>modifier(produit)}
                    >
                      <FaPen className="text-center"  size={24}/>
                    </button>
                  </div>

              </div>
            ))
         }
        </div>

        <ModalSetProduit 
          isClose={isclose}
          OnClose={fermer} 
          produit={currentProduct}
          OnSubmit={EnrModif}
        />

      </div>
  )
}


export default HomePage;