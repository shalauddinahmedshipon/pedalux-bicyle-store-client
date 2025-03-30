export type TUser= {
  _id?: string;
  name: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  status?: 'active' | 'deactivated';
  role?:  "admin" | "customer";
  isDeleted?:boolean;
  createdAt?: Date;
  updatedAt?: Date;
}