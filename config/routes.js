var express = require('express');

var isAuthenticated = require('./passport').isAuthenticated;

var binController = require('../app/controllers/bin_controller');
var mainController = require('../app/controllers/main_controller');
var userController = require('../app/controllers/user_controller');

var router = express.Router();

router.route('/')
  .get(mainController.getIndex);

router.route('/login')
  .get(userController.getLogin)
  .post(userController.postLogin);

router.route('/logout')
  .get(isAuthenticated, userController.getLogout);

router.route('/signup')
  .get(userController.getSignup)
  .post(userController.postSignup);

router.route('/new')
  .get(binController.getNewBin)
  .post(binController.postNewBin);

router.route('/:binhash')
  .get(binController.getBin)

module.exports = router;
