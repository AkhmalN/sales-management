import Table from "../../components/table";
import { keyColumn } from "../../constant/column";
import { INVOICE } from "../../data/invoice";
import ModalAdddInvoice from "./ModalAddInvoice";
import { TableAction } from "./TableAction";

const InvoicePage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden font-text">
      <Table
        data={INVOICE}
        searchBar
        keyColumn={keyColumn.invoice}
        title="Invoice List"
        fieldId="id_invoice"
        ActionAdd={<ModalAdddInvoice title="Add new invoice" />}
        status_label="status_invoice"
        Action={TableAction}
      />
    </div>
  );
};

export default InvoicePage;
