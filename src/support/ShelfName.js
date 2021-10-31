const nameOfID = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read",
  none: "None",
};

const idOfName = Object.entries(nameOfID).reduce(
  (o, [id, name]) => Object.assign(o, { [name]: id }),
  {}
);

const allShelfs = () => nameOfID;
const idToShelf = (id) => nameOfID[id];
const shelfToID = (name) => idOfName[name];

export { idToShelf, shelfToID, allShelfs };
