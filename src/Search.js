import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./support/BooksAPI";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!term) {
      setResults([]);
    } else {
      search(term);
    }
  }, [term]);

  const booksWithShelf = async (results) => {
    const myBooks = await BooksAPI.getAll();
    const bookWithShelf = (r) => {
      const b = myBooks.find((b) => b.id === r.id);
      return b ? b : r;
    };

    setResults(results.map(bookWithShelf));
  };

  const handleMove = async (book) => {
    await BooksAPI.update(book, book.shelf);
    await booksWithShelf(results);
  };

  async function search(term) {
    const results = await BooksAPI.search(term);
    const books = !results || results.error ? [] : results;
    await booksWithShelf(books);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((book) => (
            <li key={book.id}>
              <Book book={book} onMove={handleMove} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
