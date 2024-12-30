import ModalEditInvoice from "./ModalEditInvoice";
import ModalDeleteInvoice from "./ModalDeleteInvoice";

export const TableAction = ({ data, fieldId }: any) => {
  console.log({ data, fieldId });
  return (
    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
      <ModalEditInvoice title="Edit invoice" />
      <ModalDeleteInvoice title="Delete invoice" />
    </td>
  );
};
