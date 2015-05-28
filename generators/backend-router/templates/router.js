var router            = require("express").Router();
var _                 = require('underscore');
var Q                 = require('q');
var Errors            = require('errors');
var isAuthenticated   = require('helpers/is_authenticated');

router.route('/')
.all(isAuthenticated.rest)
.get(function(req, res) {

});

module.exports = router;
