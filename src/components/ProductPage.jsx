var React = require('react');

var ProductPage = React.createClass({
    getInitialState: function() {
        return {productId: ""};
    },
    componentDidMount: function() {
        this.setState({productId: this.props.params.productId});
    },
    render: function() {
        return (
            <h1>Hi, I'm product number {this.state.productId}</h1>
        );
    }
});

module.exports = ProductPage;
