import Card from "react-bootstrap/Card";
import { Button } from "reactstrap";
import React from "react";
import { Container } from "../../../components";
import { Link } from "react-router-dom";

export default function GamesNavigator() {
  const games = [{ title: "Угадайка!", name: 'Guess' }, { title: "Какушки", name: 'guess1' }];

  return (
    <>
      <Container>
        <div className="d-flex flex-wrap justify-content-between mx-auto mt-3">
          {games.map((game, index) => {
            return (
              <React.Fragment key={game.name}>
                <Card className="essay-card col-5 mt-4 pb-2 pt-2 pe-4 text-s">
                  <Card.Header>
                    <h5>{game.title}</h5>
                  </Card.Header>
                  <Card.Body></Card.Body>
                  <Card.Footer className="text-center">
                    <Button className="play-game-button" color="outline-secondary">
                      <Link to={`/Grammar/Games/${game.name}`}>
                        PLAY
                      </Link>
                    </Button>
                  </Card.Footer>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </>
  );
}
