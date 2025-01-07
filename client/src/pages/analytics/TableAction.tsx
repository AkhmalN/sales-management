import Button from "../../components/Button";
import { GoInfo } from "react-icons/go";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

export const TableAction = ({ data }: any) => {
  return (
    <td className="py-4 whitespace-nowrap flex gap-2">
      <Button className="bg-saas-primary bg-opacity-20">
        <GoInfo className="text-saas-primary" />
      </Button>
      <ModalEdit />
      <ModalDelete
        title="Hapus User"
        subtitle="Apakah Anda yakin ingin menghapus user ini? Tindakan ini tidak dapat dibatalkan."
        dt={data}
      />
    </td>
  );
};
