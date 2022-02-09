import {Card, Form, Button} from 'react-bootstrap'
import { ThemesList } from '../../../components';
import {useState} from 'react'

const Edit = ({form, shown, handleClose}) => {
  const defaultForm = form  
  
  const [newForm, setNewForm] = useState(defaultForm)

  const changeHandler = (e) => {
    setNewForm({...newForm, [e.target.name] : e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
      <>
        {shown && (
          <Card.Body className="d-flex">
            <Form className="d-flex align-items-end flex-wrap col-9" onChange={changeHandler} onSubmit={submitHandler}>
              <Form.Group className="col-4">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" name="text"/>
              </Form.Group>
              <Form.Group className="col-4 ms-4">
                <Form.Label>Translation</Form.Label>
                <Form.Control type="text" className="2" name="translation"/>
              </Form.Group>
              <Form.Group className="col-12 mt-3">
                <Form.Label>Themes</Form.Label>
                <ThemesList themes={form.themes} className="d-flex text-xxs" />
              </Form.Group>
            </Form>
            <Button
              type="submit"
              className="ms-auto mt-auto mb-auto"
              size="md"
              color="primary"
              onClick={handleClose}
            >
              Save
            </Button>
          </Card.Body>
        )}
      </>
    );
}

export default Edit