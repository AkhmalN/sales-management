export const keyColumn = {
  recent_orders: [
    { key: "tracking_no", label: "Tracking No." },
    {
      key: "product_name",
      label: "Product Name",
      isObject: true,
      objectField: "name",
    },
    { key: "price", label: "Price" },
    { key: "total_order", label: "Total Order" },
    { key: "total_amount", label: "Total Amount" },
  ],
  top_selling: [
    {
      key: "product_name",
      label: "Product Name",
      isObject: true,
      objectField: "name",
    },
    { key: "total_sales", label: "Total Sales" },
    { key: "units_sold", label: "Units Sold" },
    { key: "category", label: "Category" },
  ],
  customer: [
    { key: "username", label: "Username" },
    {
      key: "email",
      label: "Email",
    },
    { key: "address", label: "Address" },
    { key: "age", label: "age" },
    {
      key: "phone",
      label: "Phone",
    },
    { key: "gender", label: "Gender" },
    { key: "is_active", label: "Online" },
  ],
  invoice: [
    { key: "invoice", label: "Invoice" },
    { key: "name", label: "name" },
    { key: "email", label: "Invoice" },
    { key: "date", label: "date" },
    { key: "status_invoice", label: "status" },
  ],
};
