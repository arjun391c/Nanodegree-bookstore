import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBook extends Component {
  state = {
    search: "",
    searchResults: [],
  };
  onInputChange = (value) => {
    this.setState({
      search: value,
    });
    BooksAPI.search(value, 20).then((searchResults) => {
      if (!searchResults || searchResults.error) {
        this.setState({ searchResults: [] });
        return;
      }
      searchResults = searchResults.map((book) => {
        const bookOnShelf = this.props.books.find((b) => b.id === book.id);
        book.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
        return book;
      });

      this.setState({ searchResults });
    });
  };

  render() {
    console.log(this.state.searchResults);
    const { searchResults, search } = this.state;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(e) => this.onInputChange(e.target.value)}
                value={search}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {search && searchResults &&
                searchResults.map((book, index) => (
                  <li key={book.id + index}>
                    <Book
                      book={book}
                      onShelfChange={this.props.onShelfChange}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook;
