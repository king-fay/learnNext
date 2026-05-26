
import { all_produits } from "@/data";
import { ProductType } from "@/data";

export let allp = all_produits;

import { NextRequest } from "next/server";



export async function GET(){
    return Response.json({
        status : 200,
        produits : allp
    })
}


export async function POST( request : NextRequest){

    const body =await request.json() as ProductType;

    allp=[body, ...allp];

    return Response.json({
        status : 201,
        message : "produit créer avec success"
    })
    
}