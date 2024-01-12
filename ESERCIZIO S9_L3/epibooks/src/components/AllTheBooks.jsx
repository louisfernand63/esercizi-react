import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import BookList from "./BookList";

/*import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";*/

export default class AllTheBooks extends Component {
  state = {
    books: [],
    searchQuery: "",
    filterBooks: [],
  };

  componentDidMount() {
    /* this.setState({ 
           books: {
               ...this.state.books,
               fantasy: Fantasy,
               history: History,
               horror: Horror,
               romance: Romance,
               scifi: Scifi
           } }) */

    /*this.setState({
                books: [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]
            }
            )*/

    /*fetch('../books/fantasy.json').then(response => response.json()).then(data => this.setState({ books: [...this.state.books, ...data] })) */

    fetch("../books/fantasy.json")
      .then((response) => response.json())
      .then((json) => this.setState({ books: [...this.state.books, ...json] }));

    fetch("../books/history.json")
      .then((response) => response.json())
      .then((json) => this.setState({ books: [...this.state.books, ...json] }));

    fetch("../books/horror.json")
      .then((response) => response.json())
      .then((json) => this.setState({ books: [...this.state.books, ...json] }));

    fetch("../books/romance.json")
      .then((response) => response.json())
      .then((json) => this.setState({ books: [...this.state.books, ...json] }));

    fetch("../books/scifi.json")
      .then((response) => response.json())
      .then((json) => this.setState({ books: [...this.state.books, ...json] }));
  }

  /*getSearchQuery = (e) => {
          let filter = this.state.books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()))
          this.setState({ filterBooks: [...filter] })
      }*/

  getSearchQuery = () => {
    //alert(this.state.searchQuery)
    let filter = this.state.books.filter((book) =>
      book.title.includes(this.state.searchQuery)
    );
    this.setState({ filterBooks: filter });
  };
  render() {
    //console.log(this.state.searchQuery)
    return (
      <>
        <Row className="my-3">
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="Search Book Title..."
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Col>
          <Col lg={2}>
            <Button variant="secondary" onClick={this.getSearchQuery}>
              Search
            </Button>
          </Col>
        </Row>
        <BookList
          books={
            this.state.filterBooks.length !== 0
              ? this.state.filterBooks
              : this.state.books
          }
        />
        <h3>Total books: {this.state.books.length}</h3>
      </>
    );
  }
}
