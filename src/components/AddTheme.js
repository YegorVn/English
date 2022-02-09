import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import React from "react";
import '../styles/AddTheme.scss'

const AddTheme = ({ className, themes, onChange }) => {
  const text = "sample_text"
  return (
    <DropdownButton
      as={ButtonGroup}
      title={"Add a Theme"}
      variant={"secondary"}
      onSelect={(key) => onChange(key)}
      className={className}
    >
      {themes &&
        themes.map((el, index) => {
          return (
            <Dropdown.Item
              className="add-theme__item d-flex"
              key={el.text}
              eventKey={index}
            >
              {el.text}
            </Dropdown.Item>
          );
        })}
    </DropdownButton>
  );
};

export default AddTheme;
