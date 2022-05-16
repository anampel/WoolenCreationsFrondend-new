export class ProductModel {
  id: bigint;
  name: string;
  description: string;
  price: number;
  points: number;
  image: symbol;
  color: string;
  size: string;


  constructor(id: bigint, name: string, description: string, price: number, points: number, image: symbol, color: string, size: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.points = points;
    this.image = image;
    this.color = color;
    this.size = size;
  }
}

