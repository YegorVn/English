import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import { Container } from ".";

export default function Navigation({ links, className }) {
  const getGhostWordSpacing = () => {
    const random = Math.floor(Math.random() * 5);
    switch (random) {
      case 5:
        return "mt-5";
      case 4:
        return "mt-4";
      case 3:
        return "mt-3";
      case 2:
        return "mt-2";
      case 1:
        return "mt-1";
      default:
        return "mt-1";
    }
  };

  return (
    <Container>
      <div
        className={"navigation d-flex justify-content-between " + className}
      >
        {links.map((link, index) => {
          const width = 'col-' + Math.round(12 / links.length);
          return (
            <div className={"navigation-block-border d-flex " + width}>
              <div
                className={
                  "navigation-block pb-3 pt-3 px-3 " +
                  (index === links.length - 1
                    ? "ms-auto"
                    : index === 0
                    ? "me-auto"
                    : "mx-auto")
                }
                key={link.to}
              >
                <Link className="navigation-link text-l " to={link.to}>
                  {link.text}
                </Link>
                <div className="ghost-wrapper">
                  <div className="ghost-word ">yasosal</div>
                  <div className="ghost-word ">sadasd</div>
                  <div className="ghost-word ">asdasdd</div>
                </div>
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
                {/* <div className={"ghost-word " + getGhostWordSpacing()}>yasosal</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
