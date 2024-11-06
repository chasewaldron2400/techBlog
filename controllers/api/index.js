const router = require('express').Router();

const userRoutes = require('./userControllers');
const blogRoutes = require('./blogControllers')

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;