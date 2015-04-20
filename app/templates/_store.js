/** @flow */

var EventEmitter    = require("EventEmitter");
var <%= capitalName %>Constants = require("../constants/<%= name %>_constants");

/** 
 * A mesmerizing store!
 *
 * @constructor
 * @module <%= name %>
 * @author <%= userName %>
 * @version 0.0.0
 * @since 0.0.0
 *
 */
function <%= capitalName %>Store(dispatcher) : void {

};

<%= capitalName %>Store.prototype = new EventEmitter();
<%= capitalName %>Store.storeName = '<%= capitalName %>Store';

<%= capitalName %>Store.handlers = {};

<%= capitalName %>Store.prototype.getState = function() : Object {
    return {

    };
};

module.exports = <%= capitalName %>Store;
