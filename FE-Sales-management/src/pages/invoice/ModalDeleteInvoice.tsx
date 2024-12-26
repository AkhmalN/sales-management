import { MouseEventHandler, useState } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import Modal from "../../components/Modal";
import { LuTrash } from "react-icons/lu";

interface ModalProps {
  title: string;
}

const ModalDeleteInvoice = ({ title }: ModalProps) => {
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
      <Modal
        isOpen={open}
        onClose={handleToggleOpenModal}
        size="auto"
        title={title}
        className="max-w-auto"
      >
        <div className="w-auto flex flex-col gap-6">
          <p className="text-wrap">
            Are you sure you want to delete this invoice? This action cannot be
            undone.
          </p>
          <div className="flex justify-end">
            <Button className="bg-saas-danger">
              <span>Delete</span>
              <LuTrash />
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDeleteInvoice;
