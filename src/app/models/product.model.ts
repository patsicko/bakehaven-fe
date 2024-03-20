export interface ProductDTO{
    name: string,
    category: string,
    description: string,
    quantity: number,
    price: number,
    imageUrl: string
  }


  export interface OrderDTO{
    userId: number,
    productIds:number[],
    quantity: number
  }