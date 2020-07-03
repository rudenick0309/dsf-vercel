'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
    'user',
    {
      //TODO : user 테이블에 필요한 스키마를 정의 하세요
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mobile: DataTypes.STRING
    },
        {}
    );
    user.associate = function(models) {
    };
    return user;
};