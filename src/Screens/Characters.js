import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
class Character extends Component {
  render() {
    return (
        <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Select Your Character</Form.Label>
        <Form.Control as="select" multiple>
        <option>Paladin</option>
        <option>Knight</option>
        <option>Samurai</option>
        <option>Ninja</option>
        <option>Barbarian</option>
        <option>Viking</option>
        </Form.Control>
      </Form.Group>
    )
  }
}
export default Character