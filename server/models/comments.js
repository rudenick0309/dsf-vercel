'use strict'

module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define(
        'comments',
        {   
            culture: DataTypes.STRING,
            dessert_name: DataTypes.STRING,
            user_name: DataTypes.STRING,
            comment: DataTypes.STRING
        }
        ,
        { timestamps: false }
    )
    comments.associate = function(models) {}
    return comments;
}