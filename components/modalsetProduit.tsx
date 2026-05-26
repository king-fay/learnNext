"use client";

import { ProductType } from "@/data";
import { X } from "lucide-react";
import { useState,useEffect } from "react";
import { FaPen } from "react-icons/fa";

interface ModalSetProduitType {
  produit: ProductType | null;
  isClose: boolean;
  OnClose: () => void;
  OnSubmit: (p : ProductType) => void;
}

export const ModalSetProduit = (prop: ModalSetProduitType) => {
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(prop.produit?? null);
  const [visible, setVisible ] = useState(!prop.isClose);


  useEffect(()=>{
    const set =()=>{
        setVisible(!prop.isClose);
    }
    set();

  },[prop.isClose])

  useEffect(()=>{
    const set =()=>{
        if (prop.produit === null) return ;
        setCurrentProduct(prop.produit)
    }
    set();
  },[prop.produit])
  

  if (currentProduct=== null ) return ;


  return (
    <div className={`fixed flex flex-col bg-blue-200 backdrop:blur-2xl z-50 p-5 mt-10 rounded-2xl justify-center self-center  inset-0 w-200 ${visible ? "" : "hidden"} `} >

        <div className=" hover:bg-blue-400 p-5 h-16 w-16 rounded-full"
        onClick={prop.OnClose}
        >
            <X size={24}/>
        </div>

        <div className="bg-gray-300 rounded-3xl p-8 m-10 flex flex-col gap-5">
            <label htmlFor="nom" className="mt-5">
            Nom{" "}
            </label>
            <input
            type="text"
            name="nom"
            placeholder="Le nom du produit"
            title="Nom"
            className="mt-2 border border-blue-600 rounded-2xl h-10 p-3"
            required
            value={currentProduct?.nom}
            onChange={(e) =>currentProduct? setCurrentProduct({ ...currentProduct, nom: e.target.value }) : null}
            />

            <label htmlFor="desc" className="mt-2">
            Decriptions{" "}
            </label>
            <input
            type="text"
            name="desc"
            placeholder="Decription(optionel)"
            title="Nom"
            className="mt-2 border border-blue-600 rounded-2xl h-10 p-3"
            value={currentProduct?.description}
            onChange={(e) =>
               currentProduct? setCurrentProduct({ ...currentProduct, description: e.target.value }) : null
            }
            />

            <label htmlFor="prix" className="mt-2">
            Prix{" "}
            </label>
            <input
            type="text"
            name="prix"
            placeholder="Le Prix du produit"
            title="Nom"
            className="mt-2 border border-blue-600 rounded-2xl h-10 p-3"
            required
            value={currentProduct?.price}
            onChange={(e) => currentProduct? setCurrentProduct({ ...currentProduct, price: e.target.value }) : null}
            />

            <label htmlFor="qt" className="mt-2">
            Qantite{" "}
            </label>
            <input
            type="number"
            name="qt"
            placeholder="Le quantite du produit"
            title="quantite"
            className="mt-2 border border-blue-600 rounded-2xl h-10 p-3"
            min={0}
            max={100}
            value={currentProduct?.quandite}
            onChange={(e) =>
                currentProduct ?setCurrentProduct({ ...currentProduct, quandite: parseInt(e.target.value) }) : null
            }
            />

            <button
            className="bg-blue-700 rounded-3xl text-2xl mt-5 p-4 flex flex-row text-center justify-center items-center"
            onClick={(e)=>prop.OnSubmit(currentProduct)}
            >
            <FaPen />
            Modifier
            </button>
        </div>
    </div>
  );
};
