import { ADD_CART, DELETE_CART } from "./actions";

const initialState = {
  carrito: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
            price: action.payload.price,
          },
        ],
      };

    case DELETE_CART:
      return {
        ...state,
        carrito: state.carrito.filter(
          (item) => item.product.id !== action.payload.productId
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
