const express = require('express');
const router = express.Router();

const { userController } = require('../controller')

// * POST / user/signin
router.post('/signin', userController.signin.post)

// // * POST / user/signout
// router.post('/signout', userController.signout.post)

// * POST / user/signup
router.post('/signup', userController.signup.post)

// * GET / user/info
router.get('/info', userController.info.get)

// * PUT / user/info
router.put('/info', userController.info.put)



// * GET / user/nonmember  이것도 user에 놓는게 맞는지.. 
// nonmember는 그냥 바로 /dessert로 들어가도 되는거 아닌가?.. post도 필요 없을텐데..
//router.post('/nonmember', userController.nonmember_in.get)

module.exports = router;
//이게 없으면 Router.use() requires a middleware function but got a Object 에러뜸