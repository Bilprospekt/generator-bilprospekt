var express = require('express'),
    request = require('supertest'),
    bodyParser   = require('body-parser'),
    router = require('../<%= name %>');

var app = express();
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
<% if(testValues) {%>
var testCompanyId = 5567268312,
    filialTestId = 6990836840,
    personTestId = 6221669,
    userTestId = 1,
    dealerTestId = 1;
<% } %>
app.use(function(req, res, next) {
    req.user = {id : 1, dealer_id : 1, orgNr : 5560838251};
    req.isAuthenticated = function() {
        return true;
    };
    next();
});

app.use('/<%= route %>', router);

describe("<%= capitalRoute %> Router", function() {

    //Remove me
    it("Handles GET call", function(done) {
        request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
            if(err) {
                done(err);
                return;
            }
            done();
        });
    });

});
