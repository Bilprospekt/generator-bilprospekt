var React = require('react');
var <%= capitalName %> = require('../<%= name %>');
var TestUtils = React.addons.TestUtils;

describe('<%= capitalName %>', function() {

    beforeEach(function() {
        this.instance  = TestUtils.renderIntoDocument(<<%= capitalName %> />);
    });
    
    it('renders', function() {
        
    });

});
