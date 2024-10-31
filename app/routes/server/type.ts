interface User {
  id: number;
  username: string;
  name: string;
  surname: string;
  address: string;
  province: string;
  role: string;
  add_date: Date;
}

interface Customer {
  id: number;
  name: string;
  credit_limit: number;
  address: string;
  tax_id: string;
  tel: string;
  add_date: string;
  province: Date;
}

interface CustomerEdit {
    id: number;
    name?: string;
    credit_limit?: number;
    address?: string;
    tax_id?: string;
    tel?: string;
    add_date?: string;
    province?: Date;
  }

interface LoginResponse {
  payload: User;
  error: string;
  detail: string;
}
