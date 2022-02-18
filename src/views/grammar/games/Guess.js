import { Container, AddTheme, ThemesList } from "../../../components";
import { useEffect, useState } from "react";
import {Button, Form} from 'react-bootstrap'
import '../../../styles/GuessGameInput.scss'

const Guess = () => {
  const themes = [
    { text: "Cars", id: 0 },
    { text: "Trees", id: 1 },
    { text: "Trees1", id: 2 },
    { text: "Trees2", id: 3 },
    { text: "Trees3", id: 4 },
  ];

  const [addedThemes, setAddedThemes] = useState([{ text: "Cars", id: 0 }]);
  const [currentWord, setCurrentWord] = useState({text: "a", id: -1})
  const [start, setStart] = useState(false)
  const [timer, setTimer] = useState(false)
  const time = 5000

  const handleAddTheme = (id) => {
    if (addedThemes.every((el) => el.text !== themes[id].text)) {
      setAddedThemes((addedThemes) => [...addedThemes, themes[id]]);
    }
  };

  const handleRemoveTheme = (index) => {
    const newThemes = addedThemes.filter((el) => el.id != index);
    setAddedThemes(newThemes);
  };

  const changeWord = (currentWord, start, time) => {
    const words = ["asd", "kek", "lol"];
    let localTime = time

    if (currentWord.id === -1) {
      localTime = 0
    }

    if (start) {
      setTimer(true)
      let wordTimer = setTimeout(() => {
        setTimer(false)
        const currentId = currentWord.id + 1;
        setCurrentWord((currentWord) => ({
          text: words[currentId],
          id: currentId,
        }));
      }, localTime);
      return () => clearTimeout(wordTimer);
    }
  };

  useEffect(() => {
    changeWord(currentWord, start, time)
  }, [currentWord, start])

  const handleChange = () => {
  }

  return (
    <Container className="mt-4">
      <div className="d-flex">
        <AddTheme themes={themes} onChange={handleAddTheme} />
        <ThemesList
          className="d-flex flex-wrap justify-content-start align-items-center ms-auto"
          elClassName="ms-1 mt-1"
          themes={addedThemes}
          handleRemoveTheme={handleRemoveTheme}
        />
      </div>
      <div
        className="d-flex justify-content-center mt-5"
        style={{ opacity: start ? "1" : "0" }}
      >
        {currentWord.text}
      </div>
      <div className="d-flex mt-5">
        <Form.Group className="ms-auto me-auto col-3">
          <Form.Control type="text" className="" onChange={handleChange} />
          <div
            className="guess-game-timer mt-1"
            style={{
              animationDuration: start ? time + "ms" : "unset",
              animationIterationCount: timer ? 1 : 0,
            }}
          ></div>
        </Form.Group>
      </div>
      <div className="d-flex mt-5 justify-content-center">
        <Button onClick={() => setStart(!start)}>
          {!start ? "Начать" : "Стоп"}
        </Button>
      </div>
    </Container>
  );
};

export default Guess;
