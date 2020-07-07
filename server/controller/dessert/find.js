const { desserts } = require('../../models');

module.exports= {
    post: (async(req, res) => {
        await desserts.findAll({
            where: {
                dessert_culture: req.body.dessert_culture
            }})
            .then(result => res.status(200).send(JSON.stringify(result)))     
    })
}