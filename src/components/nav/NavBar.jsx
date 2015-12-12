var React = require('react');
var NavItem = require('./NavItem.jsx');
var NavBar = React.createClass({

    render: function() {

        var navStyle = {
            WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0.0.4)",
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius: 0
        };

        if (this.props.bgColor)
            navStyle.background = this.props.bgColor;

        var linkStyle = {}
        var titleStyle = {}

        if (this.props.linkColor)
            linkStyle.color = this.props.linkColor;

        if (this.props.titleColor)
            titleStyle.color = this.props.titleColor;

        var createLinkItem = function(item, index) {
            return <NavItem key={index} href={item.href} title={item.title} aStyle={linkStyle} />;
        };

        return (
                <div>
                    <nav style={navStyle} className="navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a style={titleStyle} className="navbar-brand" href="#">Product Shop</a>
                        </div>
                        <div className="collapse navbar-collapse" id="nav-collapse">
                            <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
                        </div>
                    </nav>
                </div>

        );
    }
});

module.exports = NavBar;
