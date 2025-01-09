import Table from "../../components/table";
import { keyColumn } from "../../constant/column";
import ModalAdd from "./ModalAdd";
import { TableAction } from "./TableAction";
import Loading from "../../components/Loading";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import { getUsersData } from "../../lib/api/user";

const AnalyticsPage = () => {
  const dispatch = useAppDispatch();

  const { users, status, error } = useAppSelector((state) => ({
    users: state.users.users,
    error: state.users.error,
    status: state.users.status,
  }));

  useEffect(() => {
    dispatch(getUsersData({ page: 1, size: 10, sort: "asc" }));
  }, [dispatch]);

  // console.log(users);

  if (status.loading) {
    return <Loading color="primary" size="medium" />;
  }

  if (status.failed && error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden font-text">
      <Table
        data={users}
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
