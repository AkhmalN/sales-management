import { MouseEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ModalAddd = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpenModal: MouseEventHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button className="bg-saas-primary" onClick={handleToggleOpenModal}>
        <span>Add Customer</span>
        <FaPlus />
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
              <label>First Name</label>
              <Input
                className="w-auto"
                type="text"
                placeholder="Enter customer name"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <Input
                className="w-auto"
                type="text"
                placeholder="Enter customer name"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Username</label>
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
              <label>Password</label>
              <Input
                className="w-auto"
                type="password"
                placeholder="Enter customer email"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Phone</label>
              <Input
                className="w-auto"
                type="text"
                placeholder="Enter customer phone"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Gender</label>
              <Input
                className="w-auto"
                type="number"
                placeholder="Enter customer Gender"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Age</label>
              <Input
                className="w-auto"
                type="number"
                placeholder="Enter customer Gender"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <Input
              className="w-auto"
              type="text"
              placeholder="Enter customer address"
              id=""
            />
          </div>
          <div className="flex justify-end pt-2">
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

export default ModalAddd;
