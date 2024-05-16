const express = require('express');
const router = express.Router();


const { PostUser } = require('../controllers/Post/PostUser');


router.post('/user', PostUser)
module.exports = router