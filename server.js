const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_URI =
    process.env.DB_URI ||
    "mongodb+srv://financedmytro:KarKRnvXN4OxWsgQ@cluster0.vmswb37.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
    .connect(DB_URI)
    .then(() => {
        app.listen(PORT);
        console.log("App started, DB loaded");
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
