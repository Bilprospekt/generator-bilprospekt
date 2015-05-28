/** @flow */
var React = require("react");
var dispatcher = require("dispatchers/Context");
var routes = require("routes");
var <%= capitalName %>Constants = require("../constants/<%= name %>_constants");
var <%= capitalName %>Component = require("../components/<%= name %>_component");

var <%= capitalName %>Router = Backbone.Router.extend({
    initialize : function() {
        this.route(routes.ROUTE_<%= capitalizedName %> , 'render');   
    },
    render : function() {
        React.render(
            <%= capitalName %>Component(),
            document.getElementById("applicationBox")
        );
    }
});

module.exports = new <%= capitalName %>Router();
