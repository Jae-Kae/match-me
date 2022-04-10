// "use strict";

// const db = require("./firebase.js");
// const { collection, getDocs } = require("firebase/firestore/lite");
// const {getDatabase, ref, set } = require ("firebase/database");

// const sendResponse = (res, status, data, message = "No message included.") => {
//   return res.status(status).json({ status, data, message });
// };

// const getUsers = async (req, res) => {
//   try {
//           //connect to database
//           const users = collection(db, 'users')
//           const usersSnapshot = await getDocs(users)
//         //create list of documents
//           const usersList = usersSnapshot.docs.map(doc=>doc.data());
       

//          sendResponse(res, 200, usersList, "Users info retrieved")

//   } catch (err) {
//           sendResponse(res, 400, err, "something went wrong")
//   }
// };
// const getGenres = async (req, res) => {
//   try {
//           //connect to database
//           const genres = collection(db, 'genres')
//           const usersSnapshot = await getDocs(genres)
//         //create list of documents
//           const genresList = usersSnapshot.docs.map(doc=>doc.data());
       

//          sendResponse(res, 200, genresList, "genres info retrieved")

//   } catch (err) {
//           sendResponse(res, 400, err, "something went wrong")
//   }
// };

// const createUser = async (req, res) => {
//   const data = req.body;
  

// };

// module.exports = {
//   getUsers,
//   createUser,
//   getGenres
// };
