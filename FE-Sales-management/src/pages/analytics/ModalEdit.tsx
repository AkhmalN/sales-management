import { MouseEventHandler, useState } from "react";
import Button from "../../components/Button";
import { FaPen } from "react-icons/fa";

const ModalEdit = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleOpenModal: MouseEventHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button
        className="bg-saas-orange bg-opacity-20 "
        onClick={handleToggleOpenModal}
      >
        <FaPen className="text-saas-orange" />
      </Button>
    </>
  );
};

export default ModalEdit;
