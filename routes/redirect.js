const router = require('express').Router();
const createErr = require('http-errors');
const{ findById } = require('../contr/site');

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    const item = findById(id);

    if(!item) {
        next(createErr(404));
        return;
    }

    res.redirect(item.link);
});

module.exports = router;