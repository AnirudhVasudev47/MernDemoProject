require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//My routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user")

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
});

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoute);
app.use("/api", userRoute);

//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})