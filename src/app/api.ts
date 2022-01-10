export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  description: string;
  image_link: string;
  api_featured_image: string;
  category: string;
  tag_list: string[];
  product_type: string;
}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan");
  const product = results.json();
  return product;
}

export async function getSingleProduct(id: any): Promise<Product> {
  const results = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
  const products = results.json();
  return products;
}

export type CartItems = { [productID: string]: number };
export type CheckoutResponse = { success: boolean; error?: string };

export async function checkout(items: CartItems): Promise<CheckoutResponse> {
  const modifier = Object.keys(items).length > 0 ? "success" : "error";
  const url = `/checkout-${modifier}.json`;
  await sleep(500);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data as CheckoutResponse;
}

// utility function to simulate slowness in an API call
const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));