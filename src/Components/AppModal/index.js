import Modal from "react-bootstrap/Modal";
import AppButton from "../Button";
import styles from "./style.module.scss";

const AppModal = ({ props, show, onHide, children }) => {
  return (
    <Modal
      {...props}
      show={show}
      // onHide
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modal}
    >
      <Modal.Header>
        <AppButton
          title="X"
          className={styles.cBtn}
          color="#112548"
          onClick={onHide}
        />
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default AppModal;
