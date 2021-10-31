import { useState } from "react";
import { allShelfs } from "./support/ShelfName";

const ChangeMenu = ({ shelf, onSelect }) => {
  const [selection, setSelection] = useState(shelf);

  const handleSelect = (e) => {
    setSelection(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={selection} onChange={handleSelect}>
        <option value="move" disabled>
          Move to...
        </option>
        {Object.entries(allShelfs()).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeMenu;
