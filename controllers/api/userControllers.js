const {User} = require('../../models')
const router = require('express').Router();

router.post('/', async (req, res) => {
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
      const userData = await User.findOne({ where: { email: req.body.email } });
      console.log("=============================")
      console.log(req.body)
      console.log("=============================")
  
      if (!userData) {
        return res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        return res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'An error occurred, please try again later.' });
    }
  });

router.post('/logout', async (req, res) => {
    if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
