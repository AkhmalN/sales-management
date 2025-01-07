import { MouseEventHandler, useState } from "react";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import Modal from "../../components/Modal";
import { LuTrash } from "react-icons/lu";
import { IUser } from "../../types/users";
import { deleteUserData } from "../../lib/api/users/deleteUser";

const ModalDelete = ({
  title,
  subtitle,
  dt,
}: {
  title: string;
  subtitle: string;
  dt: IUser;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleToggleOpenModal: MouseEventHandler = () => {
    setOpen(!open);
  };

  async function handleDeleteUser() {
    setIsLoading(true);
    try {
      await deleteUserData({ id: dt.id_user });
      setIsLoading(false);
      setOpen(false);
    } catch (error: any) {
      throw new Error(error);
    }
  }

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
        subtitle={subtitle}
      >
        <div className="flex w-full justify-end pt-5">
          <Button
            className="bg-saas-danger"
            onClick={handleDeleteUser}
            loading={isLoading}
            disabled={isLoading}
          >
            <span>Hapus</span>
            <LuTrash />
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDelete;
