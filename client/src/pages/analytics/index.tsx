import Table from "../../components/table";
import { keyColumn } from "../../constant/column";
import ModalAdd from "./ModalAdd";
import { TableAction } from "./TableAction";
import { getUsersData } from "../../lib/api/users/getUsers";
import Loading from "../../components/Loading";
import { useQueries } from "../../hooks/useQueries";
import { USERS_QUERY_KEY } from "../../constant/queryKey";

const AnalyticsPage = () => {
  const { isPending, data } = useQueries({
    queryKey: USERS_QUERY_KEY,
    queryFnc: () => getUsersData({ params: { page: 1, size: 10 } }),
  });

  if (isPending) {
    return (
      <div className="w-full flex justify-center items-center h-[70vh]">
        <Loading size="medium" color="primary" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden font-text">
      <Table
        data={data}
        searchBar
        keyColumn={keyColumn.customer}
        title="Customers List"
        Action={TableAction}
        fieldId="id_user"
        ActionAdd={<ModalAdd title="Add Customer" />}
        paginate
      />
    </div>
  );
};

export default AnalyticsPage;
