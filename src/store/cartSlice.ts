import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { checkout, CartItems, Product } from '../app/api'
import { RootState, AppDispatch } from '../store/store'


export interface CartState {
  cartItems: Product[],
  totalQuantity: number,
  totalPrice: number,

}
export interface ProductId {
  id: any | number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      state.totalQuantity++;
      state.totalPrice += Number(action.payload.price);
      if (!existingItem) {
        let tempProductItem = { ...action.payload };
        state.cartItems.push(tempProductItem);
      } else {
        existingItem.quantity++;
        existingItem.total_price = existingItem.total_price + Number(existingItem.price);
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<Product>) => {
      const id = action.payload.id;
      const cartItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--
      state.totalPrice = state.totalPrice - Number(cartItem!.price)
      if (cartItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        cartItem!.quantity--;
      }
    },
    removeAllFromCart: (state: CartState, action: PayloadAction<Product>) => {
      const id = action.payload.id;
      const cartItem = state.cartItems.find((item) => item.id === id);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - cartItem!.quantity;
      state.totalPrice = state.totalPrice - Number(cartItem!.price);
    }
  }
})

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions
export default cartSlice.reducer