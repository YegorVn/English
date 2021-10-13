import { Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

const Textarea = ({label, className, onChange, value, name}) => {
    //Придумать как текстареа будет работать нормально (чтобы строки нормально удалялись при изменении размера и тп)
    const [height, setHeight] = useState(120)

    const ref = useRef()

    useEffect(() => {
        if (document.querySelector("textarea").scrollHeight > 62) {
          document.querySelector("textarea").style.height =
            document.querySelector("textarea").scrollHeight + "px";
        }
    }, [value])

    return (
      <Form.Group className={className}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="textarea" cols='10' ref={ref} onChange={onChange} value={value} name={name} height={height}/>
      </Form.Group>
    );
}

export default Textarea