'use strict'

module.exports = (sequelize, DataTypes) => {

    const desserts = sequelize.define(
    'desserts',
    {
        dessert_image_url: DataTypes.STRING,
        dessert_ENname: DataTypes.STRING,
        dessert_KOname: DataTypes.STRING,
        dessert_nation: DataTypes.STRING,
        dessert_culture: DataTypes.STRING
    }
    ,{timestamps: false}
    ) 
    desserts.associate = function(models) {};
    return desserts;
}