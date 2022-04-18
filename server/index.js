"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

//import the handlers
const {
  getUsers,
  createUser,
  getGenres,
  updateGenres,
  getSpotify,
  getGenreEvents,
} = require("./handlers");

express()
  // This will give us will log more info to the console when there is a problem
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  //endpoints below
  // ---------------------------------

  //read user & genres information from database
  .get("/api/get-users", getUsers)
  .get("/api/get-genres", getGenres)
  .get("/api/get-spotify", getSpotify)
  .get("/discovery/v2/events", getGenreEvents)

  // //create a new user
  .post("/api/create-user", createUser)

  //update user genres
  .put("/api/update-genres", updateGenres)

  // catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
