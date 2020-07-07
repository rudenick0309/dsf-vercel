module.exports = {
    plus: require('./plus'),
    find: require('./find'),
    get: (async(req, res) => { //여기가 로그인or비회원으로 시작하고나서 우리 플젝이 본격적으로 보이는 페이지.
        if(isLoggingLoading === true) {
            res.send('Please hold on.')
        } else {
        if(isLoggingDone === true || nonUser === true) { // 여기를 어떻게 구현해야하지..? 프론트랑 이야기해보기..!
            res.status(200).send('Have fun!')}
        }

        if(isLoggingError === false) {
            res.status(401).send('Log-in error happened.')
        }
    })
}