import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Navigation(){
    return (
      <div className="navigation pb-5">
        <div className="d-flex col-9 justify-content-between mx-auto pt-5 mt-5">
          <Link to="/Essays">
            <Button className="" variant="primary">
              Essays
            </Button>
          </Link>
          <Link to="/Dictionary">
            <Button className="" variant="primary">
              Dictionary
            </Button>
          </Link>

          <Link to="/Spelling">
            <Button className="" variant="primary">
              Spelling
            </Button>
          </Link>
        </div>
      </div>
    );
}