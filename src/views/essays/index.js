import React, { useEffect, useState } from "react";
import { Button, } from "reactstrap";
import {Form} from 'react-bootstrap'
import { Textarea, Container, ThemesList, AddTheme } from "../../components";
import Card from "react-bootstrap/Card";
import '../../styles/Essays.scss'
import { Link } from "react-router-dom";
import Edit from './edit'
import Delete from "./delete";
import EssaysAction from "../../redux/actions/EssaysAction";
import { useSelector } from "react-redux";
import success from '../../images/success.svg'

export default function Essays() {
  const [editEssay, setEditEssay] = useState(false)
  const [createEssay, setCreateEssay] = useState(false);
  const [deleteEssay, setDeleteEssay] = useState(false)

  const [essays, setEssays] = useState([]);
  const defaultForm = {
    title: "",
    themes: [],
    fontSize: "",
    fonColor: "",
    text: "",
    translateIncluded: true
  }
  const [form, setForm] = useState(defaultForm);

  const themes = [
    { text: "Cars", id: 0 },
    { text: "Trees", id: 1 },
    { text: "Trees1", id: 2 },
    { text: "Trees2", id: 3 },
    { text: "Trees3", id: 4 },
  ]

  const statistics = {
    essays_count: '',
    simbols_count: '',
    themes: []
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.text !== "")
      setEssays((essays) => [
        ...essays,
        {
          title: form.title,
          text: form.text,
          themes: form.themes,
          val: "",
          translateIncluded: form.translateIncluded,
        },
      ]);
    setForm(defaultForm);
    setCreateEssay(false);
  };

  const handleAddTheme = (id) => {
    if((form.themes).every(el => el.text !== themes[id].text) ){
      setForm(form => ({...form, themes: [...form.themes, {text: themes[id].text, id: form.themes.length + 1}]}))
    }
  }

  const handleRemoveTheme = (index) => {
    const newThemes = (form.themes).filter((el) => el.id != index)
    setForm(form => ({themes: newThemes}))
  }

  const kek = useSelector((state) => state.essays);

  useEffect(() => {
    EssaysAction.find({id: 1})
    console.log(kek)
    // EssaysAction.create({title: "", body: ""})
  }, [])
  const [kaka, setKaka] = useState(false)
  const [koko, setKoko] = useState(false)
  return (
    <Container>
      <div className="new-essay-toogle p-2 ps-3 d-flex mt-4">
        <h4 className="mb-0">Write ur new essay!</h4>
        <button
          className="ms-auto mt-auto mb-auto arr-down-btn"
          onClick={() => setCreateEssay(!createEssay)}
        >
          &#9660;
        </button>
      </div>
      {createEssay && (
        ////////////////pe-2 чтобы пофиксить отступы на маленьком экране
        <Container className="position-absolute" style={{ zIndex: "100" }}>
          <Form
            className="d-flex flex-column mt-4 px-3 pt-2 pb-2 "
            onSubmit={onSubmit}
            style={{ background: "lightgray" }}
          >
            <div className="d-flex flex-wrap create-essay-first-row">
              <Form.Group className="col-6 col-md-4">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className=""
                />
              </Form.Group>
              <Form.Group className="col-6 col-md-3 col-lg-2 ps-2 ps-lg-4 d-flex flex-column">
                <Form.Label>Add a new theme</Form.Label>
                <AddTheme themes={themes} onChange={handleAddTheme} />
              </Form.Group>
              <Form.Group className="col-5 mt-2 mt-md-0 ps-md-2 ps-lg-4">
                <Form.Label>Added themes</Form.Label>
                <ThemesList
                  className="d-flex flex-wrap justify-content-start align-items-center"
                  elClassName="ms-1 mt-1"
                  themes={form.themes}
                  handleRemoveTheme={handleRemoveTheme}
                />
              </Form.Group>
            </div>
            <Form.Group className="mt-2">
              <Form.Label>Text</Form.Label>
              <Textarea
                onChange={handleChange}
                className="col-12 col-md-6"
                value={form.text}
                name="text"
              />
            </Form.Group>
            <Button className="col-2 mt-3" type="submit">
              save
            </Button>
          </Form>
        </Container>
      )}
      <div className="statistics mt-4 p-3 text-s">
        <div>Essays written: {statistics.essays_count}</div>
        <div>Simbols: {statistics.simbols_count}</div>
        <div>
          Themes:{" "}
          {statistics.themes.map(() => {
            return <></>;
          })}
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row flex-wrap justify-content-between mx-auto mt-3">
        {essays.map((el, index) => {
          return (
            <React.Fragment key={el.title}>
              <Card className="essay-card mt-4 pt-2">
                <Card.Header className="f-flex text-s">
                  {!kaka ? (
                    <Button className="text-xxs" onClick={() => setKaka(true)}>Translate</Button>
                  ) : (
                    <Link className="text-xxs" to={"/"}>
                        <img
                          className={kaka ? "me-2 essay-card__success" : ""}
                          src={success}
                          height={45}
                          width={20}
                          alt=""
                        />
                      Go to translation page
                    </Link>
                  )}
                  {!koko ? (
                    <Button className="text-xxs ms-2" onClick={() => setKoko(true)}>Translate</Button>
                  ) : (
                    <Link className="text-xxs ms-3" to={"/"}>
                        <img
                          className={"me-2 essay-card__success"}
                          src={success}
                          height={45}
                          width={20}
                          alt=""
                        />
                      Go to pronounce page
                    </Link>
                  )}
                </Card.Header>
                <Card.Body>
                  <ThemesList
                    themes={el.themes}
                    className="d-flex flex-wrap justify-content-start align-items-center"
                    elClassName="text-xxxs ms-1"
                  />
                  <Card.Title className="mt-2">{el.title}</Card.Title>
                  <Card.Text className="">{el.text}</Card.Text>
                </Card.Body>
                <Card.Footer className="">
                  <Button
                    type="button"
                    className=""
                    color="outline-primary"
                    onClick={() => setEditEssay(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    className="ms-2"
                    color="outline-danger"
                    onClick={() => setDeleteEssay(true)}
                  >
                    Delete
                  </Button>
                </Card.Footer>
              </Card>
              <Edit
                shown={editEssay}
                handleClose={() => setEditEssay(false)}
                form={el}
              />
              <Delete
                shown={deleteEssay}
                handleClose={() => setDeleteEssay(false)}
                form={el}
              />
            </React.Fragment>
          );
        })}
      </div>
    </Container>
  );
}
