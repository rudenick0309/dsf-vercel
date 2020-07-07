const { comments } = require('../../models');

module.exports = {
    post: (async(req, res) => {
        try{
            let makeComment = await comments.create(
                {
                    culture: req.body.culture,
                    dessert_name: req.body.dessert_name,
                    user_name: req.body.user_name,
                    comment: req.body.comment
                }
            )
            
            if(makeComment) {
                res.status(200).send('댓글이 등록되었습니다.')
            } else {
                res.status(500).send('댓글 등록에 실패하였습니다.')
            }
        } catch(e) {
            console.log(e)
        }
    })
}