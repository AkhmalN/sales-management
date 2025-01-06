import { RECENT_ORDERS_TYPE } from "../types/recent_orders";
import CameraLens from "../assets/recent_orders/Rectangle 91.png";
import BlackDressSleep from "../assets/recent_orders/Rectangle 90.png";
import ArganOil from "../assets/recent_orders/Rectangle 111.png";
import EauParfume from "../assets/recent_orders/Rectangle 110.png";

export const RECENT_ORDERS: RECENT_ORDERS_TYPE = {
  data: [
    {
      tracking_no: "#876364",
      product_name: {
        image: CameraLens,
        name: "Camera Lens",
      },
      price: "$178",
      total_order: "325",
      total_amount: "$1.46,660",
    },
    {
      tracking_no: "#876368",
      product_name: {
        image: BlackDressSleep,
        name: "Black Sleep Dress",
      },
      price: "$14",
      total_order: "53",
      total_amount: "$46,660",
    },
    {
      tracking_no: "#876412",
      product_name: {
        image: ArganOil,
        name: "Argan Oil",
      },
      price: "$21",
      total_amount: "$78",
      total_order: "78",
    },
    {
      tracking_no: "#876621",
      product_name: {
        image: EauParfume,
        name: "EAU DE Parfum",
      },
      price: "$32",
      total_amount: "$98",
      total_order: "98",
    },
  ],
};
