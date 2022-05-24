export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  points: number;
  image: string;
  color: string;
  size: string;
  categoryList: CategoryList[];
  offer: Offer;

}

export type ProductId = number;

export interface ProductGroup {
  product: ProductModel;
  quantity: number;
  groupPrice: number;
}

export interface CategoryList {
    categoryId: number;
    categoryName: string;
}

export interface Offer {
    id: number;
    description: string;
    start_date: string;
    end_date: string;
    discount: number;
}



