import { MouseEventHandler, useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import Modal from "../../components/Modal";

const ModalEdit = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpenModal: MouseEventHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center text-sm font-semibold rounded-lg mx-2"
        onClick={handleToggleOpenModal}
      >
        <FaRegPenToSquare className="text-orange-400" size={20} />
      </button>

      <Modal
        isOpen={open}
        onClose={handleToggleOpenModal}
        show
        size="very-small"
      >
        <div className="flex justify-between">
          <div>
            <p>TESTTT</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalEdit;
