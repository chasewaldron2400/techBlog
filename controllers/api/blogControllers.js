const {Comment, Blog, User} = require('../../models')
const router = require('express').Router();

// /api/blog
router.get('/', async (req, res) => {
    try {
        res.status(200).json("get all blogs route")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    } 
}  )




module.exports = router;
