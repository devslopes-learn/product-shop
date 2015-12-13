var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var LeadCapture = require('./forms/LeadCapture.jsx');
var navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "iOS Course",
        href: "/product/ios"
    },
    {
        title: "React Course",
        href: "/product/react"
    }
];

var BasePage = React.createClass({
    render: function() {

        var style = {
            paddingTop: 20
        }

        return (
            <div>
                <NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks}/>
                <div className="container" style={style}>
                    <div className="row">
                        <div className="col-sm-9">
                            {this.props.children}
                        </div>
                        <div className="col-sm-3">
                            <LeadCapture />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = BasePage;
