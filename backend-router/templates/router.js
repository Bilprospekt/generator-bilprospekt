var router            = require("express").Router(),
    _                 = require('underscore'),
    Q                 = require('q'),
    Errors            = require('errors'),
    isAuthenticated   = require('helpers/is_authenticated');

router.route('/')
.all(isAuthenticated.rest)
.get(function(req, res) {

});

module.exports = router;
