var express = require('express'),
    request = require('supertest'),
    bodyParser   = require('body-parser'),
    router = require('../<%= name %>');

var app = express();
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
<% if(testValues) {%>
var testCompanyId = 5567268312, // A random companyId
    filialTestId = 6990836840, //A random filialCompanyId
    personTestId = 6221669, //A random person
    userTestId = 1, //The userId
    dealerTestId = 1, //The dealerId of the user
    savedListTestId = '54db82e15e1f82e38dbdf4a1'; //If you want more you can change last '1' to 2 or 3.
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
