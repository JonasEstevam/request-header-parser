const express = require('express');
const router = express.Router();
const HeaderParser = require('./controllers/HeaderParser');

router.get("/whoami", HeaderParser.execute);

module.exports = router;
