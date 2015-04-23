var should = require('should'),
    _ = require('underscore'),
    Q = require('q');

//Your testfile.
var <%= capitalName %> = require('../<%= name %>');
<% if(mysql) { %>//Mysql
var mysqlConnector = require("db/mysql_connector");<% } %>
<% if(mongo) { %>//Mongo
var mongo = require('db/mongo'),
    mongodb = require('mongodb'), // Used when wrapper is not enough.
    BSON = mongodb.BSONPure;<% } %> //To create an ObjectId - new BSON.ObjectID(id);
<% if(testValues) {%>//TestValues
var testCompanyId = 5567268312, // A random companyId
    filialTestId = 6990836840, //A random filialCompanyId
    personTestId = 6221669, //A random person
    userTestId = 1, //The userId
    dealerTestId = 1, //The dealerId of the user
    savedListTestId = '54db82e15e1f82e38dbdf4a1'; //If you want more you can change last '1' to 2 or 3.
<% } %>
//Tests
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
