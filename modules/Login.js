var React = require('react');

var Login = React.createClass({
	render:function(){
		return (
			<div className="container">

		      <form classNameclassName="form-signin">
		        <h2 className="form-signin-heading">请登录</h2>
		        <label for="inputEmail" className="sr-only">用户名</label>
		        <input type="text" id="inputEmail" className="form-control" placeholder="用户名" required autofocus/>
		        <label for="inputPassword" className="sr-only">密码</label>
		        <input type="password" id="inputPassword" className="form-control" placeholder="密码" required/>
		        <div className="checkbox">
		          <label><input type="checkbox" value="remember-me"/>记住我</label>
		        </div>
		        <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
		      </form>
    </div>
		)
	}
});

module.exports = Login;