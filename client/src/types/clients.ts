export interface IUserResponse {
  data: any[];
  message?: string;
  pagination?: {
    page: number;
    size: number;
    total: number;
    total_pages: number;
  };
}
