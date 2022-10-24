import { ADDTOCART, REMOVEFROMCART } from "../Types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADDTOCART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVEFROMCART: {
      return {
        ...state,
        cartItems: [...state.cartItems.filter((element)=>element.title !== action.payload)],
      };
    }
    default:
      return state;
  }
};
