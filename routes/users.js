var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('User Index Page');    
});

router.get('/list/:id', function(req, res) {
    res.send('User List Page');
    console.log(req.params.id);
    console.log(req.query.abc);
});

module.exports = router;