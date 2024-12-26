import { MouseEventHandler, useState } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";

const ModalDelete = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleOpenModal: MouseEventHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button
        className="bg-saas-danger bg-opacity-20 "
        onClick={handleToggleOpenModal}
      >
        <FaTrash className="text-saas-danger" />
      </Button>
    </>
  );
};

export default ModalDelete;
