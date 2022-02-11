const express = require('express');

const router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.getHomePage);

router.all('/new-postfeed', controller.addNewPostFeed);
router.get('/show-postfeed/:id', controller.showOnePostFeed);
router.get('/delete-postfeed/:id', controller.delPostFeed);

router.get('/edit-postfeed/:id', controller.updatePostFeed);
router.post('/edit-postfeed/:id', controller.updatePostFeed);


module.exports = router;