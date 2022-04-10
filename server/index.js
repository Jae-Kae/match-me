"use strict";

const express = require("express");
const morgan = require("morgan");


const PORT = 4000;

// const {getUsers, createUser, getGenres} = require("./handlers")

express()

 // This will give us will log more info to the console when there is a problem
.use(morgan("tiny"))
.use(express.json())

    // Any requests for static files will go into the public folder
    .use(express.static("public"))


    //endpoints below
  // ---------------------------------

//   .get("/api/get-users", getUsers)
//   .get("/api/get-genres", getGenres)



// //create a new user
// .post("/api/create-user", createUser)


//catch all endpoint
.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

.listen(PORT, () => console.info(`Listening on port ${PORT}`));