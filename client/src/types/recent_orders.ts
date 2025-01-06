export type RECENT_ORDERS_TYPE = {
  data: {
    tracking_no: string;
    product_name: {
      image: string;
      name: string;
    };
    price: string;
    total_amount: string;
    total_order: string;
  }[];
};
