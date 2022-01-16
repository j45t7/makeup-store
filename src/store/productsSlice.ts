import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../app/api'

export interface ProductsState {
  products: Product[],
}

export interface ProductId {
  id: any | number;
}

const initialState: ProductsState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    receivedProducts: (state, action: PayloadAction<Product[]>) => {
      const products = action.payload
      state.products = products.map((product) => {
        const productPrice = product?.price === '0.0' ? '5.5' : product?.price
        return { ...product, quantity: 1, price: productPrice, total_price: Number(productPrice) }
      })
    },
  }
})

export const { receivedProducts } = productsSlice.actions
export default productsSlice.reducer