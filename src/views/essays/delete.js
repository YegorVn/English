import { Modal, Button, Form } from "react-bootstrap";


const Delete = ({shown, handleClose, submitHandler, form}) => {
  const deleteHandler = () => {
  }  
  
  return (
      <Modal
        show={shown}
        onHide={handleClose}
        size="sm"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Essay title: {form.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to delete this essay?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {deleteHandler(); handleClose()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default Delete