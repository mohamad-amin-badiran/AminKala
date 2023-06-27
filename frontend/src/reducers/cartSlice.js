import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartAdedd, DeleteCart } from "../services/server";

export const addToCart = createAsyncThunk(
  "/cart/addcart",
  async (initialValue) => {
    let response = await CartAdedd(initialValue);
    return response.data;
  }
);

export const deleteFromCart = createAsyncThunk(
  "/cart/deletecart",
  async (initial) => {
    await DeleteCart(initial);
    return initial;
  }
);

let initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   state.cart.push(action.payload);
    // },
  },
  extraReducers: (bilder) => {
    bilder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        let { id } = action.payload;                
        state.cart.filter(
          (product) => product.id !== id
        );
      });
  },
});

// export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
