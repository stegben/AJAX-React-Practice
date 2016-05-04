
const Router = require('express').Router;
const router = new Router();

const user_data = {
  users: [
    { name: 'John', age: 23 },
    { name: 'Amy', age: 18 },
  ]
};

router.get("/user", (req, res) => {
  res.json(user_data);
});

router.get("/user/:username", (req, res) => {
  var idx = 0;
  for (idx = 0; idx < user_data['users'].length; idx++){
    if (user_data['users'][idx]['name'] === req.params.username){
      res.status(200).json(user_data['users'][idx]);
      break;
    };
  };
  res.status(404).send("no such name: " + req.params.username)
});

module.exports = router;
