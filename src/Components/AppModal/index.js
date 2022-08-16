import Modal from "react-bootstrap/Modal";
import AppButton from "../Button";
import styles from "./style.module.scss";
import crossIcon from '../../Assets/images/cross.png'

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
        <div className={styles.closeBtn}>
          <img onClick={onHide} src={crossIcon} />
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default AppModal;
