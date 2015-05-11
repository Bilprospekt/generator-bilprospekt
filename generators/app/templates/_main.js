var Dispatcher = require("dispatchers/Dispatcher");

var <%= capitalName %>Store = require("./stores/<%= name %>_store");

Dispatcher.registerStore(<%= capitalName %>Store);
<% if(router) { %>
//Router
require('./routes/<%= name %>_router');
<% } %>
