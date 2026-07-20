require("dotenv").config();

const express = require("express");
const studentRoutes = require("./routes/student.routes");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`College Event Management API Running on Port ${PORT}`);
});