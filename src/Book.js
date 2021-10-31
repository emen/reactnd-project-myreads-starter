import ChangeMenu from "./ChangeMenu";

const Book = ({ book, onMove }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url("${book.imageLinks.thumbnail}")`
              : null,
          }}
        ></div>
        <ChangeMenu
          shelf={book.shelf || "none"}
          onSelect={(shelf) => onMove({ ...book, shelf })}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{(book.authors || []).join(", ")}</div>
    </div>
  );
};

export default Book;
