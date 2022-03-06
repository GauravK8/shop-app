export interface IProduct {
  id: number;
  title: string;
  description: string;
  picture: string;
}

export interface IProductFilters {
  title?: string;
  description?: string;
}
