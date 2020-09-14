// Advanced

module.exports = {
    post: (async(req, res) => {
        await
        req.session.destroy()
        res.redirect('/')  
        res.end();
    })
};