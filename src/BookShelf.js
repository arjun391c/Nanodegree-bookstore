import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
  const {shelfBooks,onShelfChange,shelfTitle} = props;    
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {shelfBooks.map(book=> <li key={book.id}><Book book={book} onShelfChange={onShelfChange}/></li>)}
            </ol>
          </div>
        </div>
      </div>
    );
}

export default BookShelf;
