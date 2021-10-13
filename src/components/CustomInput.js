import { Form } from "react-bootstrap";
import { Input } from "reactstrap";

const CustomInput = ({label, className, onChange, value, name}) => {
    return (
      <Form.Group className={className}>
        <Form.Label>{label}</Form.Label>
        <Input onChange={onChange} value={value} name={name}/>
      </Form.Group>
    );
}

export default CustomInput