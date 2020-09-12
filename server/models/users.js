'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
    'users',
    {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mobile: DataTypes.STRING
    },
    {
        timestamps: true,
        hooks: {
            afterValidate: (data, options) => { // afterValidate는 내가 설정한 값을 sha1으로 암호화 함.
              var shasum = crypto.createHash('sha1'); // shasum = 알고리즘
               //console.log(shasum)
                shasum.update(data.password); // shasum으로 data. password를 암호화
                data.password = shasum.digest('hex')
            }
        }
    }
    );
    users.associate = function(models) {
    };
    return users;
};

//models/users 그리고 indedx.js, dessert, comments 있었음
// timestamps를 true로 주게 되면 createdAt과 updatedAt 컬럼을 추가
