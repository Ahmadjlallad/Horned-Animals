import React from "react";
import Form from "react-bootstrap/Form";
export default class FilterImages extends React.Component {
  render() {
    return (
      <Form.Select
        aria-label="Default select example"
        onChange={(e) =>
          this.props.selectedHorn(Number.parseInt(e.target.value))
        }
      >
        <option>Open this select menu</option>
        <option selected value="0">
          All Horn category🐱‍🏍
        </option>
        <option value="1">One Horn category</option>
        <option value="2">Two Horn category</option>
        <option value="3">Three Horn category</option>
        <option value="100">🤠WOW🤠</option>
      </Form.Select>
    );
  }
}
