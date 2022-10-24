import { ADDTOCART, REMOVEFROMCART } from "../Types"


export const addToCart =(item)=>{
    return{
        type:ADDTOCART,
        payload: item,
    }
}

export const removeFromCart=(productTitle)=>{
    return{
        type:REMOVEFROMCART,
        payload:productTitle
    }
}