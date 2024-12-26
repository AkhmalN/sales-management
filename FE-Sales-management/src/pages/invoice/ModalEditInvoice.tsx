import { MouseEventHandler, useState } from "react";
import Button from "../../components/Button";
import { FaPen } from "react-icons/fa";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { LuSave } from "react-icons/lu";

interface ModalProps {
  title: string;
}

const ModalEditInvoice = ({ title }: ModalProps) => {
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
      <Modal
        isOpen={open}
        onClose={handleToggleOpenModal}
        size="medium"
        title={title}
      >
        <form className="flex flex-col justify-between w-full h-full">
          <div className="w-full grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label>Name</label>
              <Input
                className="w-auto"
                type="text"
                placeholder="Enter customer name"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <Input
                className="w-auto"
                type="text"
                placeholder="Enter customer email"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Date</label>
              <Input
                className="w-auto"
                type="date"
                placeholder="Enter invoice date"
                id=""
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-saas-primary">
              <span>Save</span>
              <LuSave />
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalEditInvoice;
