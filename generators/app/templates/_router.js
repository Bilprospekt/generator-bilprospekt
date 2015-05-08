/** @flow */
var React = require("react"),
    dispatcher = require("dispatchers/Context"),
    routes = require("routes"),
    <%= capitalName %>Constants = require("../constants/<%= name %>_constants"),
    <%= capitalName %>Component = require("../components/<%= name %>_component");

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
