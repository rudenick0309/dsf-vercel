require('dotenv').config();

let dessertPW = process.env.DESSERT_PASSWORD

module.exports = {
    "development": {
        username: "admin",
        password: dessertPW,
        database: "dessert",
        port: 13306,
        host :"dessertdb.cnbhvz2bmwob.ap-northeast-2.rds.amazonaws.com",
        dialect : "mysql"
    }
}

//console.log(dessertPW)