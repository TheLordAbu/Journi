import Modal from "../../UI/Modal";
import CreateJourniForm from "./CreateJourniForm";

function AddJourni() {
  return (
    <Modal.Window name="journi-form">
      <CreateJourniForm />
    </Modal.Window>
  );
}

export default AddJourni;
