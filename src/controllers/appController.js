const DB = require('../firebase/db.js');
const BOARDS_COLLECTION = "boards";


const getBoards = (userId, callback, onError) => {
  try {
    return DB.getQueryWithFilter("userId", userId, BOARDS_COLLECTION, onError);
  }
  catch(error) {
    onError(error);
  }
};


const getBoard = (id, callback, onError) => {
  try {
    return DB.getQueryWithFilter("id", id, BOARDS_COLLECTION, onError);
  }
  catch(error) {
    onError(error);
  }
};

const writeBoard = (id, board, callback, onError) => {
  try {
    DB.writeOne(id, board, BOARDS_COLLECTION, onError);
  }
  catch(error) {
    onError(error);
  }
};

const deleteBoard = (id, callback, onError) => {
  try {
    DB.deleteOne(id, BOARDS_COLLECTION, callback, onError);
  }
  catch(error) {
    onError(error);
  }
};


export {
  getBoards,
  writeBoard,
  deleteBoard
}
