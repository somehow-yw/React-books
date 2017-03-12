var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
require('style-loader!css-loader!./style.css');

var App = require('./modules/App');
var Home = require('./modules/Home');
var Login = require('./modules/Login');
var List = require('./modules/List');
var Detail = require('./modules/Detail');
var Register=require('./modules/Register');
var Index = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/detail/:id" component={Detail} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/list/:type" component={List} />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<Index/>,document.getElementById('app'));