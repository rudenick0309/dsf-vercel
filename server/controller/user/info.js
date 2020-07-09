const { users } = require('../../models');
const crypto = require('crypto')

module.exports = {
    get: (async(req, res) => {
        try{
        console.log(req)
        if (await req.session.userid) {
            let findInfo = await users.findOne({
                attributes: ['username','email','mobile'],
                where: {
                    id: req.session.userid
                }
            })
            res.status(200).send(findInfo)
        } else {
            res.stats(404).send('회원정보 획득을 실패했습니다.')
        }
        } catch(e) {
            e => console.log(e)
            res.stats(404).send('회원정보 획득을 실패했습니다.')
        }
    }),
    put: (async(req,res) => {
        var shasum = crypto.createHash('sha1'); // shasum = 알고리즘
        shasum.update(req.body.password); // shasum으로 비밀번호 암호화
        req.body.password = shasum.digest('hex')
        
        try{
            // await users.findOne( { where: req.session.userid })
            await users.update(
                {
                    username: req.body.username,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    password: req.body.password //아놔.... 아니 변경할때 이거 키값쌍을 다넣어주는거였어???? 아놔...진짜....
                }, 
                { 
                    where: {
                        id: req.session.userid
                    }
                })
            await res.status(200).send('성공적으로 변경했습니다.')
        } catch(err) {
            console.log(err)
        }

        })
        
}

// (async(req, res) => {
//     try{
//         await users.findOne( { where: req.session.userid })
//         await users.update(
//             {
//                 username: req.body.username,
//                 email: req.body.email,
//                 mobile: req.body.mobile
//             }, 
//             { 
//                 where: {
//                     id: req.session.userid
//                 }
//             })
//         await res.status(200).send('성공적으로 변경했습니다.')
//     } catch(err) {
//         alert(err)
//     }
// })