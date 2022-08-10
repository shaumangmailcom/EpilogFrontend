import Modal from "react-bootstrap/Modal";
import AppButton from "../Button";
import styles from "./style.module.scss";

const AppModal = ({ props, show, onHide }) => {
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
      <Modal.Body>
        <h4 className="title24">Thank You</h4>
        <p className="desc">
           For the rest of your journey with us, please answer as if
          <b>you are</b> your loved one facing the complex medical diagnosis.
        </p>
        <AppButton title="OK" width="100px" borderRadius="5px " />
      </Modal.Body>
    </Modal>
  );
};

export default AppModal;
