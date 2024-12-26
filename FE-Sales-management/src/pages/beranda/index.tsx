import { FaHeart } from "react-icons/fa";
import { FaRadio, FaBagShopping } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import Fragments from "../../components/Fragments";
import SimpleLineCharts from "../../components/charts/LineCharts";
import SimplePieCharts from "../../components/charts/PieCharts";
import Table from "../../components/table";
import { RECENT_ORDERS } from "../../data/recent_orders";
import { TOP_SELLING_PRODUCTS } from "../../data/top_selling_products";
import { keyColumn } from "../../constant/column";
import Listing from "../../components/Listing";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden font-text">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Fragments
          title="Save Products"
          count={178}
          icon={<FaHeart className="w-24 h-24" />}
          bgColor="bg-saas-blue"
          iconColor="text-saas-blue"
        />
        <Fragments
          title="Stock Products"
          count={20}
          icon={<FaRadio className="w-24 h-24" />}
          bgColor="bg-saas-yellow"
          iconColor="text-saas-yellow"
        />
        <Fragments
          title="Sales Products"
          count={190}
          icon={<FaBagShopping className="w-24 h-24" />}
          bgColor="bg-saas-orange"
          iconColor="text-saas-orange"
        />
        <Fragments
          title="Job Applications"
          count={12}
          icon={<BsSuitcaseLgFill className="w-24 h-24" />}
          bgColor="bg-saas-primary"
          iconColor="text-saas-primary"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full gap-3">
        <div className="h-[500px] w-full lg:w-2/3">
          <SimpleLineCharts />
        </div>
        <div className="h-[500px] w-full lg:w-1/3 flex justify-center items-center ">
          <SimplePieCharts />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start w-full gap-3">
        <div className="sm:w-full lg:w-2/3">
          <Table
            fieldId="id_order"
            data={RECENT_ORDERS}
            title="Recent Orders"
            keyColumn={keyColumn.recent_orders}
          />
        </div>
        <div className="sm:w-full lg:w-1/3">
          <Listing title="Top Selling Products" data={TOP_SELLING_PRODUCTS} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
