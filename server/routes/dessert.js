//여기가 2nd Page로 가정..
const express = require('express');
// const multer = require('multer');
// const path = require('path')

const router = express.Router();


const { dessertController } = require('../controller') 
console.log(dessertController)

// //* GET /dessert   <<-- 여기가 지도가 있는 2페이지가 될 것.
// router.get('/', dessertController.get)


// * POST / dessert / plus / post
router.post('/plus', dessertController.plus.post)


// * POST / dessert / find / post
router.post('/find', dessertController.find.post)



module.exports = router;



// const upload = multer({
//     storage: multer.diskStorage({
//         //set a localstorage destination
//         destination: (req, file, cb) => {
//             cb(null, 'uploads/');
//         },
//         // convert a file name
//         filename: (req, file, cb) => {
//             cb(null, new Date().valueOf() + path.extname(file.originalname))
//         }
//     })
// })