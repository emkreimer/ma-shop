export class ProductDTO {
  name: string;
  dateCreated?: string;
  price: number;
  quantity?: number;
  isEditable: boolean | null;
}
