import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card style={{ width: "18rem" }} className={this.state.selected === true ? "selectedBook" : ""}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => this.setState((prevState) => ({ selected: !prevState.selected }))}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
