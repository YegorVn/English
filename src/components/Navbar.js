import { Link } from "react-router-dom";
import { Container } from ".";
import "../styles/Navbar.scss";
import user from "../images/user.svg";
import { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [userInfo, setUserInfo] = useState(false);

  const dropdown = useRef();

  useOutsideClick(dropdown, setUserInfo);


  return (
    <Container className="navbar-container mt-3">
      <div className="navbar-wrapper d-flex flex-lg-row flex-wrap justify-content-between align-items-center">
        <div className="navbar-links text-l bold uppercase px-3 d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center col-12 col-lg-9">
          {["Essays", "Grammar", "Pronounce"].map((el, index) => {
            return (
              <Link
                key={el}
                className={
                  "navbar-links__link pt-2 pb-2 col-12 col-lg-4 col-xl-3 text-center " +
                  (active === el ? "navbar-links-focused " : "") +
                  (index > 0 ? "mt-4 mt-lg-0" : "")
                }
                to={`/${el}`}
                onClick={() => setActive(el)}
              >
                {el}
              </Link>
            );
          })}
        </div>

        <button
          className="user-info col-12 col-lg-3 mt-5 mt-lg-0"
          onClick={() => setUserInfo(!userInfo)}
        >
          <div className="user-info-content col-12 col-lg-11 ms-xl-auto d-flex align-items-center px-2">
            <img src={user} className="user-info-content__icon " alt="" />
            <div className="user-info-text-block ms-4">
              <div className="user-info-text-block__name text-s">
                Дмитрий Иванович
              </div>
              <div className="user-info-text-block__statuse text-xxs">
                Ученик
              </div>
            </div>
            <div className="ms-auto arr-down-btn">&#9660;</div>
          </div>
        </button>
      </div>

      <div className={userInfo ? "d-flex" : "d-none"}>
        <div className="d-none d-lg-block col-12 col-lg-9"></div>
        <div className="user-info-dropdown col-12 col-lg-3 mt-5 mt-lg-0">
          <div
            ref={dropdown}
            className="user-info-dropdown-links col-12 col-lg-11 ms-xl-auto d-flex flex-column align-items-start"
          >
            {["Profile", "Themes", "Road map"].map((el, index) => {
              return (
                <Link
                  key={el}
                  to={`/${el}`}
                  className={
                    "user-info-dropdown-links__link pt-3 pb-3 text-s col-12 px-2 " +
                    (active === el ? "user-info-dropdown-links-focused " : "")
                  }
                  onClick={(el) => setActive(el)}
                >
                  {el}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
