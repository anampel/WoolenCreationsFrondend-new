export class ProductModel {
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

  // tslint:disable-next-line:max-line-length
  constructor(id: number, name: string, description: string, price: number, points: number, image: string, color: string, size: string, categoryList: CategoryList[], offer: Offer) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.points = points;
    this.image = image;
    this.color = color;
    this.size = size;
    this.categoryList = categoryList;
    this.offer = offer;
  }
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



