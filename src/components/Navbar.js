import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { Container } from ".";
import '../styles/Navbar.scss'

export default function Navbar(){
    return (
      <Container className="">
        <div className="navbar-wrapper pb-3 pt-3 px-3 mt-3 text-xxl d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center">
          <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center col-12 col-lg-9">
            <Link
              className="navbar-link pt-3 pb-3 col-lg-4 col-xl-3 text-center"
              to="/Essays"
            >
              Essays
            </Link>
            <Link
              className="navbar-link pt-3 pb-3 mt-4 mt-lg-0 col-lg-4 col-xl-3 text-center"
              to="/Grammar"
            >
              Grammar
            </Link>
            <Link
              className="navbar-link pt-3 pb-3 mt-4 mt-lg-0 col-lg-4 col-xl-3 text-center"
              to="/Pronounce"
            >
              Pronounce
            </Link>
          </div>
          
          <div className="col-12 col-lg-3 ps-5 text-xxl ms-lg-auto">Пользователь пидарасина</div>
        </div>
      </Container>
    );
}