import { Form } from "react-bootstrap";
import { useRef, useState } from "react";
import "../styles/Textarea.scss"
// import { CustomDropdown } from ".";

const Textarea = ({ label, className, onChange, value, name }) => {
  const [cursive, setCursive] = useState()
  const [bold, setBold] = useState()


  const cursiveHandler = () => {
    setCursive(!cursive)
  }

  const boldHandler = () => {
    setBold(!bold)
  }

  const lol = useRef();
  const handleResize = (e) => {
    const code = e.keyCode
    if(code === 13){
      lol.current.style.height = (lol.current.scrollHeight + 25) + 'px';
    }
    if(code === 8 && lol.current.scrollHeight > 134){
      lol.current.style.height = (lol.current.scrollHeight - 25) + 'px';
    }
    
    
  }

  return (
    <div className={className} onChange={onChange}>
      <div className="d-flex align-items-center col-12 textarea-panel p-2 uppercase">
        <Form.Group className="d-flex align-items-center col-4 col-lg-4">
          <Form.Label className="mb-0">font size</Form.Label>
          <select className="ms-2" name="fontSize">
            {[10, 12, 15, 16, 18, 20].map((el) => {
              return <option key={el}>{el}</option>;
            })}
          </select>
        </Form.Group>
        <Form.Group className="d-flex align-items-center col-4 col-lg-4">
          <Form.Label className="mb-0">font color</Form.Label>
          <Form.Control type="color" className="ms-2" name="fontColor"/>
        </Form.Group>
        <button
          type="button"
          className={
            "textarea-cursive ms-3 " +
            (cursive ? "textarea-cursive-active" : "")
          }
          onClick={() => cursiveHandler()}
        >
          K
        </button>
        <button
          type="button"
          className={
            "textarea-bold ms-3 " + (bold ? "textarea-bold-active" : "")
          }
          onClick={() => boldHandler()}
        >
          М
        </button>
      </div>

      <Form.Control
        as="textarea"
        ref={lol}
        aria_multiline="true"
        className="mt-0 txta"
        cols="10"
        onChange={onChange}
        value={value}
        name={name}
        onKeyDown={handleResize}
      />
    </div>
  );
};

export default Textarea;
