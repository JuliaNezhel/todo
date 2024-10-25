export type Task = {
  id: number;
  name: string;
  description: string;
  categoryId: number | null;
};

export type Category = {
  id: number;
  name: string;
  description: string;
};
