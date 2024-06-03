const express = require('express')

const { findUsers } = require('../controllers/userController');

const router = express.Router();

router.get('', findUsers)

module.exports = router;