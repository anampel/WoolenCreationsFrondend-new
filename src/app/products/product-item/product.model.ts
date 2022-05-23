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



