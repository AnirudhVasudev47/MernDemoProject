let express = require('express');
let router = express.Router();
const {signout, signup, signin, isSignedIn} = require("../controllers/auth")
const {check} = require("express-validator");

router.post("/signup", [
        check("name", "name should be at least 3 char").isLength({min: 3}),
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 6 char").isLength({min: 6}),
    ],
    signup);

router.post("/signin", [
        check("email", "email is required").isEmail(),
        check("password", "password is required").isLength({min: 6}),
    ],
    signin);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.send("working");
});

module.exports = router;