var Dispatcher = require("dispatchers/Dispatcher");

var <%= capitalName %>Store = require("./stores/<%= name %>_store");

Dispatcher.registerStore(<%= capitalName %>Store);
