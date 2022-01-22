import { Form, Dropdown } from "react-bootstrap";
import { Input } from "reactstrap";
import { useEffect, useRef, useState } from "react";

const Textarea = ({ label, className, onChange, value, name }) => {
  //Придумать как текстареа будет работать нормально (чтобы строки нормально удалялись при изменении размера и тп)
  // const [height, setHeight] = useState(60)

  const ref = useRef();

  useEffect(() => {
    if (ref.current.scrollHeight > 60) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    } else {
      ref.current.style.height = 120 + "px";
    }
  }, [value]);

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center col-1">
          <div className="col-5">font size</div>
          <Dropdown className="ms-2" onChange={(event) => console.log(event.target.value)}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              1
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {["2", "4", "5"].map((el) => {
                return <Dropdown.Item key={el}>{el}</Dropdown.Item>;
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center col-1">
          <div className="col-6">font color</div>
          <Input type="color" className="" />
        </div>
        <div className="d-flex align-items-center col-1">
          <div className="col-6">cursive?</div>
        </div>
        <div className="d-flex align-items-center col-1">
          <div className="col-6">bold?</div>
        </div>
      </div>

      <Form.Control
        className="mt-5"
        as="textarea"
        cols="10"
        ref={ref}
        onChange={onChange}
        value={value}
        name={name}
      />
    </Form.Group>
  );
};

export default Textarea;
