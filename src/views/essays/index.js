import React, { useEffect, useState, Space } from "react";
import { Input, Label, Button, Form } from "reactstrap";
import { Textarea, CustomInput, Container } from "../../components";
import Card from "react-bootstrap/Card";
import {Stack} from "react-bootstrap";
export default function Essays() {
  const [essays, setEssays] = useState([]);
  const [fresh, setFresh] = useState({ text: "" });
  const [createEssay, setCreateEssay] = useState();

  useEffect(() => {
    console.log(essays);
  }, [essays]);

  const handleChange = (e) => {
    setFresh({ ...fresh, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fresh.text !== "")
      setEssays((essays) => [...essays, { text: fresh.text, val: "" }]);
    setFresh({ text: "" });
  };

  return (
    <Container>
      <div className="new-essay-toogle p-2 ps-3 d-flex mt-4">
        <h2>Write ur new essay!</h2>
        <button
          className="ms-auto mt-auto mb-auto"
          onClick={() => setCreateEssay(!createEssay)}
        >
          &#9660;
        </button>
      </div>
      {createEssay && (
        <Form
          className="d-flex flex-column mt-4 col-9 px-3 pt-2 pb-2 position-absolute"
          style={{ zIndex: "1", background: "#fbf1ff" }}
          onSubmit={onSubmit}
        >
          <div className="d-flex">
            <CustomInput label="Title" className="col-4" />
            <CustomInput label="Theme" className="col-4 ms-4" />
          </div>
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
      )}
      <div className="statistics mt-4 p-3 text-s">
        <div>Essays written:</div>
        <div>Simbols:</div>
        <div>Themes:</div>
        <div>KEk:</div>
      </div>
      <div className="d-flex flex-wrap justify-content-between mx-auto mt-3">
        {essays.map((el, index) => {
          return (
            <React.Fragment key={el}>
              <Card className="essay-card col-5 mt-4 pb-2 pt-2 pe-4 text-s">
                <Card.Header>
                  <h5>{el.title}</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{el.text}</Card.Text>
                </Card.Body>
                <Card.Footer className="">
                  <Button className="" color="outline-secondary">
                    Edit
                  </Button>
                  <Button className="ms-2" color="outline-danger">
                    Delete
                  </Button>
                </Card.Footer>
              </Card>
            </React.Fragment>
          );
        })}
      </div>
    </Container>
  );
}
