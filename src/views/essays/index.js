import { useEffect, useState } from "react";
import { Input, Label, Button, Form } from "reactstrap";
import { Textarea, CustomInput } from "../../components";
import Card from 'react-bootstrap/Card'

export default function Essays() {
  const [essays, setEssays] = useState([{text: ''}])
  const [fresh, setFresh] = useState({text: ''})
  
  useEffect(() => {
    console.log(essays)
  }, [essays])

  const handleChange = (e) => {
     setFresh({...fresh, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (fresh.text !== "")
      setEssays((essays) => [...essays, { text: fresh.text, val: "" }])
    setFresh({text: ''})
  }

  return (
    <div>
      <Form className="d-flex flex-column col-9 mx-auto" onSubmit={onSubmit}>
        <h2>Write ur new essay!</h2>
        <CustomInput label="Title"/>
        <Textarea
          className="mt-2"
          label="Text"
          onChange={handleChange}
          value={fresh.text}
          name="text"
        />
        <Button className="col-2 mt-3" type="submit">
          save
        </Button>
      </Form>
      <div className="d-flex flex-wrap justify-content-between col-9 mx-auto mt-4">
        {essays.map((el, index) => {
          return (
            <>
              {el.text !== "" && (
                <>
                  <Card className="col-5 mt-4">
                    <Card.Header><h5>qweqwe</h5></Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {el.text}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="">
                      <Button color="success">Show</Button>
                      <Button color="outline-secondary">Edit</Button>
                      <Button className="" color="outline-danger">Delete</Button>
                    </Card.Footer>
                  </Card>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
