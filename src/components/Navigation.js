import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import { Container } from ".";

export default function Navigation({ links, className }) {

  return (
    <Container>
      <div
        className={"navigation d-flex justify-content-between " + className}
      >
        {links.map((link, index) => {
          const width = 'col-' + Math.round(12 / links.length);
          return (
            <div className={"navigation-block-border d-flex " + width} key={link.to}>
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
                  <div className="ghost-word ">english</div>
                  <div className="ghost-word ">sacrifice</div>
                  <div className="ghost-word ">loyality</div>
                </div>
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
