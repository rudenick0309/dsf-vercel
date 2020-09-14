const { users } = require('../../models');
//const jose = require('jose')

module.exports = {
    post: (async(req, res) => {
        //users에 있으면 '사용하고 있는 유저입니다'
        //users에 없으면 새로 만들어야함
        if(await users.findOne(
            {
                where: 
                { email: req.body.email } // 여기서 계속 에러남..ㅜㅜㅜ 키값을 넣었어야지..! 그리고 객체 밖에 {} 표시 안해줘서 계속 에러났잖아..ㅜ
            }
            )) {
            res.status(409).send('이미 존재하는 사용자입니다.')
        } else {
            let newUser = await users.create(
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    mobile: req.body.mobile
                }
            )
            res.status(200).send('회원가입이 완료되었습니다.')
            res.end()
        } 
        
    })
}

// console.log(users) --> 출력: users

//7월 5일 회원가입 완료 및 db작업 완료하기