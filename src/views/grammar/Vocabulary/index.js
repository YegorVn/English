import React, { useState } from "react";
import { Button} from "reactstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Container, AddTheme, ThemesList } from "../../../components";
import Heart from '../../../images/heart.png'
import Delete from './delete'
import Edit from './edit'

export default function Words(){
    const [edit, setEdit] = useState()
    const [del, setDel] = useState() 

    const [words, setWords] = useState([])
    const defaultForm = {text: '', theme: "", bg: "", translation: "", themes: []}
    const [form, setForm] = useState(defaultForm)
   
    const themes =[
      { text: "Cars", id: 0 },
      { text: "Trees", id: 1 },
      { text: "Trees1", id: 2 },
      { text: "Trees2", id: 3 },
      { text: "Trees3", id: 4 },
    ]
  
    const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleAddTheme = (id) => {
      if((form.themes).every(el => el.text !== themes[id].text) ){
        setForm(form => ({...form, themes: [...form.themes, {text: themes[id].text, id: form.themes.length + 1}]}))
      }
    }
  
    const handleRemoveTheme = (index) => {
      const newThemes = (form.themes).filter((el) => el.id != index)
      setForm(form => ({themes: newThemes}))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      setWords((words) => [...words, { text: form.text, translation: form.translation, themes: form.themes, bg: "#fff", val: "" }])
      setForm(defaultForm)
    }

    return (
      <Container>
        <Form className="mt-5" onSubmit={onSubmit}>
          <h2 className="d-flex col-xl-12">
            Add a new word or a phrase
            <Link className="favourite-link pe-3 ps-3 ms-auto" to="/">
              <span className="me-2">Favourite</span>
              <img src={Heart} width={"25px"} height={"25px"} alt="" />
            </Link>
          </h2>
          <div className="d-flex mt-3 col-xl-12">
            <Form.Group className="col-3">
              <Form.Label>New Word</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                value={form.text}
                name="text"
              />
            </Form.Group>
            <Form.Group className="col-3 ms-5">
              <Form.Label>Translation (optional)</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                value={form.translation}
                name="translation"
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column ms-5">
              <Form.Label className="">Complexity (optional :D)</Form.Label>
              <div className="d-flex flex-column mt-2">
                <Form.Range className="" />
              </div>
            </Form.Group>
          </div>
          <div className="d-flex col-xl-12 mt-3">
            <Form.Group className="col-2">
              <AddTheme themes={themes} onChange={handleAddTheme} />
            </Form.Group>
            <ThemesList
              className="d-flex align-items-center"
              elClassName="ms-2"
              handleRemoveTheme={handleRemoveTheme}
              themes={form.themes}
            />
          </div>
          <Button className="col-2 mt-4" type="submit">
            save
          </Button>
        </Form>
        <div className="d-flex flex-wrap justify-content-between mx-auto mt-4">
          {words.map((el, index) => {
            return (
              <React.Fragment key={el.text}>
                <Card className="col-5 mt-4 ps-2" bg={el.bg}>
                  <Card.Body className="d-flex flex-wrap">
                    <Card.Text className="col-4 text-l">{el.text}</Card.Text>
                    <Card.Text className="col-4 text-l">
                      {el.translation}
                    </Card.Text>
                    {el.themes.length > 0 && (
                      <Card.Text className="col-4 text-l">
                        <ThemesList
                          themes={el.themes}
                          className="d-flex text-xxxs"
                        />
                      </Card.Text>
                    )}
                    <Button
                      className="ms-auto"
                      size="sm"
                      color="primary"
                      onClick={() => setEdit(true)}
                      disabled={edit || del ? true : false}
                    >
                      Edit
                    </Button>
                    <Button
                      className="ms-2"
                      size="sm"
                      color="outline-danger"
                      onClick={() => setDel(true)}
                      disabled={edit || del ? true : false}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                  <Edit
                    shown={edit}
                    form={el}
                    handleClose={() => setEdit(false)}
                  />
                </Card>
                <Delete
                  shown={del}
                  handleClose={() => setDel(false)}
                  form={el}
                />
              </React.Fragment>
            );
          })}
        </div>
        
      </Container>
    ); 
}