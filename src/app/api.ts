export interface Product {
  id: any | number;
  name: string;
  brand: string;
  price: string;
  description: string;
  image_link: string;
  api_featured_image: string;
  category: string;
  tag_list: string[];
  product_type: string;
  quantity: number;
  total_price: number;
}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan");
  const products = results.json();
  return products;
}

export type CartItems = { [productID: number]: number };

// utility function to simulate slowness in an API call
const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));