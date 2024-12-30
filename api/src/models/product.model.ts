import { RowDataPacket } from "mysql2";

export interface IProduct extends RowDataPacket {
  id_product?: string;
  product_name: string;
  category: string;
  price: number;
  quantity: number;
  product_status: string;
  stock: number;
  id_sales: number;
  image_url: string;
}
