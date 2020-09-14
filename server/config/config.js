require('dotenv').config();

module.exports = {
    "development": {
        username: "root",
        password: process.env.DESSERT_PASSWORD,
        database: "dessert",
        host :"127.0.0.1",
        dialect : "mysql"
    }
}

