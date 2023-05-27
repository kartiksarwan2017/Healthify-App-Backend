const router = require('express').Router();

router.get('/', (req, res) => {

    return res.json({ "Welcome": ` to my Backend Software for the Healthify Web App ` });

});
router.use('/api', require('./users'));
router.use('/api', require('./auth'));
router.use('/api', require('./yoga'));

module.exports = router;

