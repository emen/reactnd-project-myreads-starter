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
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <ChangeMenu
          shelf={book.shelf || "None"}
          onSelect={(shelf) => onMove({ ...book, shelf })}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{(book.authors || []).join(", ")}</div>
    </div>
  );
};

export default Book;
