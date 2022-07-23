//reducer bizim state yönetimi yaptığımız yerdir.
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (cart) => cart.product.id === action.payload.product.id
      );
      //state dediğimiz şey sepetimiz oluyor
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, action.payload];
      }
    case actionTypes.REMOVE_FROM_CART:
      var newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.product.id
      );
      return newState2;
    default:
      return state;
  }
}
