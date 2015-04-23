var should = require('should'),
    _ = require('underscore'),
    Q = require('q');

var <%= capitalName %> = require('../<%= name %>');

<% if(mysql) { %>var mysqlConnector = require("db/mysql_connector");<% } %>
<% if(mongo) { %>var mongo = require('db/mongo'); <% } %>
<% if(testValues) {%>
var testCompanyId = 5567268312, // A random companyId
    filialTestId = 6990836840, //A random filialCompanyId
    personTestId = 6221669, //A random person
    userTestId = 1, //The userId
    dealerTestId = 1, //The dealerId of the user
    savedListTestId = '54db82e15e1f82e38dbdf4a1'; //If you want more you can change last '1' to 2 or 3.
<% } %>
describe('<%= capitalName %>', function() {
    <% if(mysql || mongo) { %>
    beforeEach(function(done) {
        Q.all([
            <% if(mysql) { %>mysqlConnector.loadFixtures(),<% } %><% if(mongo) { %>mongo.loadFixtures(),<% } %>
        ]).then(function() {
            done();
        }).catch(function(err) {
            done(err);
        });
    });
    <% } %>
    <% if(mongo) { %>
    afterEach(function(done){
        mongo.clearDB(true).then(function() {
            done();
        });
    });
    <% } %>
    it('works', function(done) {
        done();
    });

});
