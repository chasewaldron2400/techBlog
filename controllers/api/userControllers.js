const {User} = require('../../models')
const router = require('express').Router();

router.post('/register', async (req, res) => {
    try {
        console.log("=============================")
        console.log(req.body)
        console.log("=============================")
        res.status(200).json("register route")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    } 
}  )

router.post('/login', async (req, res) => {
    try {
        console.log("=============================")
        console.log(req.body)
        console.log("=============================")
        res.status(200).json("login route")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    } 
}  )

router.post('/logout', async (req, res) => {
    try {
        console.log("=============================")
        console.log(req.body)
        console.log("=============================")
        res.status(200).json("logout route")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    } 
}  )

module.exports = router;
