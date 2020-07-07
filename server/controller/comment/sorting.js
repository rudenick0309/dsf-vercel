const { comments } = require('../../models');


module.exports = {
    post: (async(req, res) => {
            let sorted = await comments.findAll(
                { where:
                    { culture: req.body.culture },
                attributes: ['user_name','comment']
                })
            
            if(sorted) {
                res.status(200).send(JSON.stringify(sorted))
            } else {
                res.status(400).send('댓글 분류 작업이 실패했습니다.')
            }
    })
}