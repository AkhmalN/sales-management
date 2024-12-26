import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table";
import { keyColumn } from "../../constant/column";
import { CUSTOMERS } from "../../data/customers";
import ModalAdd from "./ModalAdd";
import { TableAction } from "./TableAction";
import { getUsers } from "../../lib/api/users/getUsers";

const AnalyticsPage = () => {
  const { isPending, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isPending) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden font-text">
      <Table
        data={CUSTOMERS}
        searchBar
        keyColumn={keyColumn.customer}
        title="Customers List"
        Action={TableAction}
        fieldId="id_customer"
        ActionAdd={<ModalAdd title="Add Customer" />}
      />
    </div>
  );
};

export default AnalyticsPage;
