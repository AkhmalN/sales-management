export interface IUser {
  id_user: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  gender?: string;
  phone?: string;
  age?: number;
  address?: string;
  is_active?: 0;
  last_active?: Date;
  created_at?: Date;
}
