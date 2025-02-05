import Book from "./Book";
import { shelfToID } from "./support/ShelfName";

const Bookshelf = ({ books, shelf, onChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelfToID(shelf))
            .map((book) => (
              <li key={book.id}>
                <Book book={book} onMove={onChange} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
