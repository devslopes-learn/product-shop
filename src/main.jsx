var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/NavBar.jsx');

var navLinks = [
    {
        title: "Home",
        href: "#"
    },
    {
        title: "Courses",
        href: "#"
    },
    {
        title: "Blog",
        href: "#"
    }];

ReactDOM.render(<NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks}/>, document.getElementById('nav'));
