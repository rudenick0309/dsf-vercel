//declare Express
const express = require('express');

//express와 mysql 연결(1)
const sequelize = require('./models/index').sequelize;

//middleware
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const morgan = require('morgan')

//Routes
const userRouter = require('./routes/user')
const dessertRouter = require('./routes/dessert')
const commentRouter = require('./routes/comment')
const searchRouter = require('./routes/search')

const app = express()
// const port = 4000;

//express와 mysql 연결()
sequelize.sync()

//use middleware
app.use(bodyparser.json());
app.use(cors({
    origin: ['http://13.125.58.125:3000'],
    method: ['GET', 'POST'],
    credentials: true
}))
app.use(morgan('dev'))
app.use(session({ // 세션을 관리하기 위해 필요한 미들웨어.
    secret : 'Secret Key',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieparser()) //요청된 쿠키를 쉽게 추출할 수 있도록 해주는 미들웨어.


app.get('/', (req,res) => {
    res.status(200).send('Success!')
})

app.use('/user', userRouter)
app.use('/dessert', dessertRouter)
app.use('/comment', commentRouter)
app.use('/search', searchRouter)

app.listen(4000,() => {
    console.log('데이터베이스 연결 성공');
})
