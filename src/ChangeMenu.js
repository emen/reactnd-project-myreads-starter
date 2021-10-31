import { useState } from "react";

const shelfs = {
  "Currently Reading": "currentlyReading",
  "Want to Read": "wantToRead",
  Read: "read",
  None: "none",
};

const ChangeMenu = ({ shelf, onSelect }) => {
  const [selection, setSelection] = useState(shelf);

  const handleSelect = (e) => {
    setSelection(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleSelect}>
        <option value="move" disabled>
          Move to...
        </option>
        {Object.entries(shelfs).map(([fullName, id]) => (
          <option key={id} value={fullName}>
            {fullName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeMenu;
