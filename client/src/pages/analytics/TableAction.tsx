import Button from "../../components/Button";
import { GoInfo } from "react-icons/go";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

export const TableAction = ({ data, fieldId }: any) => {
  console.log({ data, fieldId });
  return (
    <td className="py-4 whitespace-nowrap flex gap-2">
      <Button className="bg-saas-primary bg-opacity-20">
        <GoInfo className="text-saas-primary" />
      </Button>
      <ModalEdit />
      <ModalDelete />
    </td>
  );
};
