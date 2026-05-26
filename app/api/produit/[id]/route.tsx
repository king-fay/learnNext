import { NextRequest } from "next/server"
import { allp } from "../route"


export async function GET(request : NextRequest, {params } : {params : any}){

    const {id} = await params;
    

    const le_produit = allp.find((prod) => prod.id == id)

    if (!le_produit || le_produit=== null) return Response.json({status : 404, detail : "le produit n'existe pas"})
    
    
    return Response.json({
        status : 200,
        produit : le_produit
    })
}


export async function PUT(request : NextRequest, {params} : {params : any}){
    const {id} = await params;
    const body = await request.json();

    const le_produit = allp.find((prod) => prod.id == id)

    if (!le_produit || le_produit=== null) return Response.json({status : 404, detail : "le produit n'existe pas"})

    
}