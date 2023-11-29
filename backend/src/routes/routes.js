const express = require('express');
const { addContact } = require('../controller/main');
const router = express.Router();


router.post('/addContact', addContact );


module.exports = router;
