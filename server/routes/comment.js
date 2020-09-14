const express = require('express');
const router = express.Router();

const { commentController } = require('../controller')


// 댓글달기. POST : comment/making
router.post('/making', commentController.making.post)

//댓글분류. POST: comment/sorting
router.post('/sorting', commentController.sorting.post)


module.exports = router;