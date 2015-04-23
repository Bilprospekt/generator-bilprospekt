var should = require('should'),
    _ = require('underscore'),
    Q = require('q');

var <%= capitalName %> = require('../<%= name %>');

<% if(mysql) { %>var mysqlConnector = require("db/mysql_connector");<% } %>
<% if(mongo) { %>var mongo = require('db/mongo'); <% } %>
<% if(testValues) {%>
var testCompanyId = 5567268312,
    filialTestId = 6990836840,
    personTestId = 6221669,
    userTestId = 1,
    dealerTestId = 1;
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
