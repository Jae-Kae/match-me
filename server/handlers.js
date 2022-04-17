"use strict";
const { db, app } = require("./firebase.js");
const { collection, getDocs, setDoc, doc } = require("firebase/firestore/lite");
const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json");
const request = require("request-promise");
// const fetch = require("node-fetch");
// const fetch = require("node-fetch")
require("dotenv").config();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://match-me-f98ec.firebaseio.com",
});

const database = admin.firestore();



const sendResponse = (res, status, data, message = "No message included.") => {
  return res.status(status).json({ status, data, message });
};


//get info from the db
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

    sendResponse(res, 200, req.body, "YAY!!");
  } catch (err) {
    console.log("ERROR", err);
    sendResponse(res, 400, err, "NO!!");
  }
};



const createUser = async (req, res) => {
  const data = req.body;
};


//connect to the spotify API for playlists
const getSpotify = async (req, res) => {
  try {
    // const veggieHeaders = {
    //   headers: {
    //     Accept: 'application/json'
    //   }}
    // const response = await request('https://api.spoonacular.com/recipes/random?apiKey=4b59a671d9014bbcb7c996e8360465a6&number=5&tags=vegetarian', veggieHeaders)
    // const parsedResponse = JSON.parse(response);

    // const result = parsedResponse;
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_SECRET;

    // We need, annoyingly, a base64-encoded string of our id:secret, for spotify.
    // We can use Buffers to do this for us.
    // const clientId = "271d989521864414a3cea46b52c665ac";
    // const clientSecret = "9f672f896aaf4e3090b8caef38c83df3"
    const authString = Buffer.from(clientId + ":" + clientSecret).toString(
      "base64"
    );

    const response = await request("https://accounts.spotify.com/api/token", {
      method: "GET",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
    const result = await response.json();

    sendResponse(res, 200, result, "Data sent!");
    // console.log(veggie, 'VEGGGG')
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err, "Data not received!");
  }
};



const getGenreEvents = async (req, res) => {
  try {
    const popularHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request("https://app.ticketmaster.com/discovery/v2/events.json?keyword=house&countryCode=CA&apikey=MiivSZaSZq2GEaVSfrk5J5w97HmVgLKj")
    const parsedResponse = JSON.parse(response);
    const popular = parsedResponse;
    res.status(200).json({ status: 200, data: popular, message: "Its ok"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "meow"});
  }
}


module.exports = {
  getUsers,
  createUser,
  getGenres,
  updateGenres,
  getSpotify,
  getGenreEvents
};

// const admin = require("firebase-admin");

// require("dotenv").config();

// admin.initializeApp({
//   credential: admin.credential.cert({
//     type: "service_account",
//     project_id: process.env.FIREBASE_PROJECT_ID,
//     private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
//     private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//     client_email: process.env.FIREBASE_CLIENT_EMAIL,
//     client_id: process.env.FIREBASE_CLIENT_ID,
//     auth_uri: "https://accounts.google.com/o/oauth2/auth",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
//   }),
//   databaseURL: process.env.FB_DATABASE_URL,
// });
