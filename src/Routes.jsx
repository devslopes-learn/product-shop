var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
    queryKey: false
});

var Base = require('./components/BasePage.jsx');
var Home = require('./components/HomePage.jsx');
var Product = require('./components/ProductPage.jsx');

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base} >
            <IndexRoute component={Home} />
            <Route path="/product/:productId" component={Product} />
        </Route>
    </Router>
);

module.exports = Routes;
