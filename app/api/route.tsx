
import { produits,ProductType } from "@/data";

export function GET(){

    return Response.json({status : 200, data : produits});
}