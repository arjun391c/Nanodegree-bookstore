import React from "react";
import "./App.css";
import SearchBook from "./SearchBook";
import Dashboard from "./Dashboard";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  onShelfChange = (book ,shelf)=>{
    book.shelf = shelf
    this.setState({
      books: [...this.state.books.filter(b => b.id !== book.id) , book]
    })
    BooksAPI.update(book,shelf)
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Dashboard books={this.state.books} onShelfChange={this.onShelfChange}/>}
        />
        <Route path="/search" render={() => <SearchBook onShelfChange={this.onShelfChange} books={this.state.books}/>}/>
      </div>
    );
  }
}

export default BooksApp;
