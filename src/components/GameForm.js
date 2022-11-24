import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../style/Form.css";

function GameForm() {
  let titles = ["TT1", "TT2"];
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <div className="inline-elements">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{titles[0]}</Pagination.Item>
            <Pagination.Item>{titles[1]}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div> */}
        <div className="mb-3">
          <Form.Check
            inline
            label="TT1"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="TT2"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
        </div>
        <div className="mb-3">
          <Form.Check
            inline
            label="Today"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Tomorrow"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GameForm;
