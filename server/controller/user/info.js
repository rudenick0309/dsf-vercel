const { users } = require('../../models');

module.exports = {
    get: (async(req, res) => {
        if (req.session.userid) {
            let findInfo = await users.findOne({
                attributes: ['username','email','mobile'],
                where: {
                    id: req.session.userid
                }
            })
            res.status(200).send(findInfo)
        }

    }),
    post: (async(req, res) => {
        users.update(
            {
                username: req.body.username,
                email: req.body.email,
                mobile: req.body.mobile
            }, 
            { 
                where: {
                    id: req.session.userid
                }
            })
            .then(() => res.status(200).send('성공적으로 변경되었습니다.'))
            .catch(err => console.log(err))
    })
}