import React from "react"
import { Link } from "react-router-dom"
import BookShelf from "./BookShelf"

const Dashboard =(props) =>{
    const {onShelfChange} = props
    const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead =props.books.filter((book) => book.shelf === 'wantToRead')
    const read =props.books.filter((book) => book.shelf === 'read') 
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                shelfTitle={"Currently Reading"}
                shelfBooks={currentlyReading}
                onShelfChange={onShelfChange}
              />
              <BookShelf
                shelfTitle={"Want to Read"}
                shelfBooks={wantToRead}
                onShelfChange={onShelfChange}
              />
              <BookShelf
                shelfTitle={"Read"}
                shelfBooks={read}
                onShelfChange={onShelfChange}
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
