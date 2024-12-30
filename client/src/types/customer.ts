export type CUSTOMERS_TYPE = {
  id_customer: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  address: string;

  performance: {
    data: number[];
    stats: {
      completed_tasks: string;
      pending_tasks: string;
    };
  };
};
