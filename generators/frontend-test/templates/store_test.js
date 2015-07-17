var dispatcher = require('dispatchers/Context');
var <%= capitalName %> = dispatcher.getStore('<%= capitalName %>');
var <%= capitalMainName %>Constants = require('../constants/<%= mainName %>_constants');

var should = require('should');

describe('<%= capitalName %>', function() {

    beforeEach(function() {

    });

    it('Has state', function() {
        var state = <%= capitalName %>.getState();
        state.should.be.Object;
    });
});
