var express = require('express');
var request = require('supertest');
var bodyParser   = require('body-parser');
var router = require('../<%= name %>');
var Q = require('q');
var should = require('should');
var _ = require('underscore');

var app = express();
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
<% if(mysql) { %>//Mysql
var mysqlConnector = require('db/mysql_connector');<% } %>
<% if(mongo) { %>//Mongo
var mongo = require('db/mongo');
var mongodb = require('mongodb'); // Used when wrapper is not enough.
var BSON = mongodb.BSONPure;<% } %> //To create an ObjectId - new BSON.ObjectID(id);
<% if(testValues) {%>
var testCompanyId = 5567268312; // A random companyId
var filialTestId = 6990836840; //A random filialCompanyId
var personTestId = 6221669; //A random person
var userTestId = 1; //The userId
var dealerTestId = 1; //The dealerId of the user
var savedListTestId = '54db82e15e1f82e38dbdf4a1'; //If you want more you can change last '1' to 2 or 3.
<% } %>
app.use(function(req, res, next) {
    req.user = {
        id: 1, dealer_id: 1, orgNr: 5560838251,
    };

    req.isAuthenticated = function() {
        return true;
    };
    next();
});

app.use('/<%= route %>', router);

<% if (socket) { %>
//Socket
var ioClient = require('socket.io-client');
var socketUrl = 'http://localhost:5000';

var http = require('http');
var server = http.createServer(app);
server.listen.apply(server, [5000]);
var io = require('socket.io')(server);

var eventEmitter = require('helpers/event_emitter');

eventEmitter.on('update', function(payload) {
    io.to(payload.userId).emit('update', payload.update);
});

io.on('connection', function(socket) {
    socket.on('register', function(userId) {
        if (userId) {
            socket.join(userId);
        }
    });
});

//The client to listen on.
var client;
<% } %>

describe('<%= capitalRoute %> Router', function() {
    <% if(socket) { %>
    before(function(done) {
        client = ioClient.connect(socketUrl);
        client.on('connect', function() {
            client.emit('register', 1);
            done();
        });
    });
    <% } %>
    <% if(mysql || mongo) { %>
    beforeEach(function(done) {
        Q.all([
            <% if(mysql) { %>mysqlConnector.loadFixtures(),<% } %>
            <% if(mongo) { %>mongo.loadFixtures(),<% } %>
        ]).then(function() {
            done();
        }).catch(function(err) {
            done(err);
        });
    });<% } %>
    <% if (socket || mongo) { %>
    afterEach(function(done){
      <% if (socket) { %>
        client.off('update');
      <% } %>
      <% if (mongo) { %>
        mongo.clearDB(true).then(function() {
            done();
        });
      <% } %>
    });
    <% } %>
    <% if (socket) { %>
    after(function() {
      client.off('connect');
    });
    <% } %>
    it('Handles GET call', function(done) {
        request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
            if (err) {
                done(err);
                return;
            }

            done();
        });
    });

});
