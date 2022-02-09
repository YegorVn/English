import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Textarea, AddTheme } from "../../components";

const Edit = ({ shown, handleClose, form, themes }) => {
  const defaultForm = form
  const [newForm, setNewForm] = useState(defaultForm)

  const changeHandler = (e) => {
    setNewForm({...newForm, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  return (
    <Modal show={shown} onHide={handleClose} size="lg" backdrop="static" centered>
      <Form onSubmit={submitHandler} onChange={changeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="col-12">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={changeHandler} value={form.title}/>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Text</Form.Label>
            <Textarea />
          </Form.Group>
          <Form.Group className="mt-3">
            <AddTheme />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Edit;
