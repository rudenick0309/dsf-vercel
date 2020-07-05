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

const app = express()
const port = 4000;

//express와 mysql 연결()
sequelize.sync()

//use middleware
app.use(bodyparser());
app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true
}))
app.use(morgan('dev'))
//app.use(session({})


app.get('/', (req,res) => {
    res.status(200).send('Success!')
})

app.use('/user', userRouter)

app.listen(4000)