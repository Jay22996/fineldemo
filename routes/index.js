var express = require('express');
const { add, find, accept, decline } = require('../controller/users');
var router = express.Router();

/* GET home page. */
router.post("/add",add)
router.get("/find",find)
router.get("/accept/:id",accept)
router.get("/decline/:id",decline)
// router.post('/login',login)
// router.post('/register',add_User)
// router.get("/findbyid/:id",find_User)

module.exports = router;
