const { users } = require('../../models');
const crypto = require('crypto')

module.exports = {
    post: (async(req, res) => {
        var shasum = crypto.createHash('sha1'); // shasum = 알고리즘
        shasum.update(req.body.password); // shasum으로 비밀번호 암호화
        req.body.password = shasum.digest('hex')

        let user = await users.findOne({
            attributes: ['id'],
            where: { // 있으면 결과가 나오고 없으면 null로 출력됨
                email: req.body.email,
                password: req.body.password
            }
        })

        if(await user) {
            req.session.userid = user.id
            res.status(201).send(user)
        } else {
            res.status(404).send('유효하지 않은 사용자입니다.')
        }
    })
}

