const { desserts } = require('../../models');

module.exports= {
    post: (async(req, res) => {
        if(await desserts.findOne(
            { 
                where: 
                { dessert_ENname: req.body.dessert_ENname }
            }
            )) {
            res.status(409).send('This dessert already exists.')
        } else {
            let newDessert = await desserts.create(
                {
                    dessert_image_url: req.body.dessert_image_url,
                    dessert_ENname: req.body.dessert_ENname,
                    dessert_KOname: req.body.dessert_KOname,
                    dessert_nation: req.body.dessert_nation,
                    dessert_culture: req.body.dessert_culture
                }
            )
            res.status(200).send(newDessert)
        }
    }),

    get: (async(req,res) => {
        console.log('hi')
        desserts.findAll({ 
            where: {
                culture: req.body.culture
            }
        })
        .then(result => {
            res.status(200).send(result)
        })
    })
}