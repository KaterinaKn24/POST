const router = require('express').Router();
const{ getLinks } = require('../contr/site');

router.get('/', (req, res) => {
    const links = getLinks();
    res.render('main', { links });
});

router.post('/AAAAA', function(req, res, next) {
    console.log('body:', req.body);
    res.json({ status: 'ok' });
});

module.exports = router;