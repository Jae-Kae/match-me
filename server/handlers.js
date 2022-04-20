"use strict";
const { db, app } = require("./firebase.js");
const { collection, getDocs, setDoc, doc, query, orderBy, limit } = require("firebase/firestore/lite");
const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json");
const request = require("request-promise");
require("dotenv").config();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://match-me-f98ec.firebaseio.com",
});


const database = admin.firestore();



const sendResponse = (res, status, data, message = "No message included.") => {
  return res.status(status).json({ status, data, message });
};


//get info from the users db
const getUsers = async (req, res) => {
  try {
    //connect to database
    const users = collection(db, "users");
    const usersSnapshot = await getDocs(users);
    //create list of documents
    const usersList = usersSnapshot.docs.map((doc) => doc.data());

    sendResponse(res, 200, usersList, "Users info retrieved");
  } catch (err) {
    sendResponse(res, 400, err, "something went wrong");
  }
};
const getGenres = async (req, res) => {
  try {
    //connect to database
    const genres = collection(db, "genres");
    const usersSnapshot = await getDocs(genres);
    //create list of documents
    const genresList = usersSnapshot.docs.map((doc) => doc.data());

    sendResponse(res, 200, genresList, "genres info retrieved");
  } catch (err) {
    sendResponse(res, 400, err, "something went wrong");
  }
};

//change info inside a document
const updateGenres = async (req, res) => {
  const { choicesCopy, currentuser } = req.body;
  

  console.log("REQ:", currentuser);
  try {
    const usersRef = doc(db, "users", currentuser);
    setDoc(usersRef, { genres: choicesCopy }, { merge: true });

    sendResponse(res, 200, choicesCopy, "YAY!!");
  } catch (err) {
    console.log("ERROR", err);
    sendResponse(res, 400, err, "NO!!");
  }
};

const updateBio = async (req, res) => {
  const { bioValue, currentuser } = req.body;
  console.log("REQ:", req.body);
  
  try {

    const usersRef = doc(db, "users", currentuser);
    setDoc(usersRef, { bio: bioValue }, { merge: true });

    sendResponse(res, 200, req.body, "YAY!!");
  } catch (err) {
    console.log("ERROR", err);
    sendResponse(res, 400, err, "NO!!");
  }

}

//get events from Ticketmaster
const getGenreEvents = async (req, res) => {
  const {keyword} = req.params
  try{
    const response = await request(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&countryCode=CA&apikey=MiivSZaSZq2GEaVSfrk5J5w97HmVgLKj`)

    // const data = await response.json()
    const parsedResponse = JSON.parse(response);
   

    res.status(200).json({ status: 200, data: parsedResponse, message: "Its ok"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "meow"});
  }
}


//get and post info from messages DB
const getMessages = async (req, res) =>{

  try{
    const messagesRef = collection(db, "message");
    const query = query(messagesRef, orderBy("timestamp"), limit(25));

    const messagesSnapshot = await getDocs(genres);
    //create list of documents
    const genresList = usersSnapshot.docs.map((doc) => doc.data());

    
    sendResponse(res, 200, genresList, "genres info retrieved");
  }catch(err){
    sendResponse(res, 400, err, "genres info retrieved");
  }

}


module.exports = {
  getUsers,
  getGenres,
  updateGenres,
  getGenreEvents,
  getMessages,
  updateBio,
};
