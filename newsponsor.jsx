import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TextField } from "@fluentui/react/lib/TextField";
import { PrimaryButton } from "@fluentui/react";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import businessassociate from "./associates";
const NewSponsor = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let options = [];
  businessassociate.map((item) =>
    options.push({
      key: item.id,
      text: item.name,
    })
  );

  return (
    <div className="newSponsor">
      <h3>New Sponsor</h3>
      <Row>
        <Col className="flexForm">
          <TextField label="First Name" />
        </Col>
        <Col className="flexForm">
          <TextField label="Last Name" />
        </Col>
        <Col className="flexForm">
          <Dropdown
            placeholder="Select an option"
            label="Business Associate"
            options={options}
          />
        </Col>
        <Col className="flexForm">
          <TextField label="Amount" />
        </Col>
      </Row>
    </div>
  );
};
export default NewSponsor;
