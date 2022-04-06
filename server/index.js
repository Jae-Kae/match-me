"use strict";

const express = require("express");
const morgan = require("morgan");


const PORT = 4000;
express()


.listen(PORT, () => console.info(`Listening on port ${PORT}`));