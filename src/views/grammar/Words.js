import { useEffect, useState } from "react";
import { Input, Button} from "reactstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import { Container } from "../../components";
import Heart from '../../images/heart.png'

export default function Words(){
    const [words, setWords] = useState([])
    const [fresh, setFresh] = useState({text: '', theme: "", bg: ""})
    const themes = ['kek1', 'lol', 'kek2']
  
    useEffect(() => {
      console.log(words)
      console.log(fresh)
    }, [words, fresh])
  
    const handleChange = (e) => {
       setFresh({...fresh, [e.target.name]: e.target.value})
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      const random = Math.floor(Math.random() * 10);
      const color =
      (random === 1 && "primary") ||
      (random === 2 && "secondary") ||
      (random === 3 && "success") ||
      (random === 4 && "danger") ||
      (random === 5 && "warning") ||
      (random === 6 && "info") ||
      (random === 7 && "light") ||
      (random === 8 && "dark")
      if (fresh.text !== "")
        setWords((words) => [...words, { text: fresh.text, theme: fresh.theme, bg: color, val: "" }])
      setFresh({text: ''})
    }  
    return (
      <Container>
        <Form className="d-flex flex-column mt-4" onSubmit={onSubmit}>
          <h2 className="d-flex">
            Add a new word
            <Link className="favourite-link pe-3 ps-3 ms-auto" to="/">
              Favourite
              <img src={Heart} width={"30px"} height={"30px"} />
            </Link>
          </h2>
          <Form.Group className="d-flex">
            <div className="col-3">
              <Form.Label>New Word</Form.Label>
              <Input onChange={handleChange} value={fresh.text} name="text" />
            </div>
            <div className="col-3 ms-5">
              <Form.Label>Translation (optional)</Form.Label>
              <Input onChange={handleChange} value={fresh.text} name="text" />
            </div>
            <div className="d-flex flex-column ms-5">
              <Form.Label className="">Complexity (optional :D)</Form.Label>
              <div className="d-flex flex-column mt-2">
                <Form.Range className=""/>
              </div>
            </div>
          </Form.Group>
          <div className="d-flex">
            <div className="col-2">
              <Form.Select
                aria-label="Default select example"
                placeholder="asdasdasd"
                className="mt-2"
                value={fresh.theme}
                name="theme"
                onChange={handleChange}
                size=""
              >
                {themes.map((el) => (
                  <>
                    <option className="d-none">Theme</option>
                    <option value={el} key={el}>
                      {"Тема: " + el}
                    </option>
                  </>
                ))}
              </Form.Select>
            </div>
          </div>
          <Button className="col-2 mt-3" type="submit">
            save
          </Button>
        </Form>
        <div className="d-flex flex-wrap justify-content-between mx-auto mt-4">
          {words.map((el, index) => {
            return (
              <>
                <Card className="col-5 mt-4 ps-2" bg={el.bg}>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="col-2 text-l">{el.text}</div>
                      <div className="col-2">Translation: {el.translation}</div>
                      <div className="col-2 ">{el.theme}</div>
                      <Button
                        className="ms-auto"
                        size="sm"
                        color="outline-danger"
                      >
                        Edit
                      </Button>
                      <Button className="" size="sm" color="outline-danger">
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </Container>
    ); 
}