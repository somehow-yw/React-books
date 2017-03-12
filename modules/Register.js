var React = require('react');

var Register = React.createClass({
	render:function(){
		var username=$("#inputEmail").value;
		var password=$("#inputPassword").value;
		console.log(username,password);
		return (
			<div className="container">
		      <form classNameclassName="form-signin">
		        <h2 className="form-signin-heading">请注册</h2>
		        <label for="inputEmail" className="sr-only">用户名</label>
		        <input type="text" id="inputEmail" className="form-control" placeholder="用户名" required autofocus/>
		        <label for="inputPassword" className="sr-only">密码</label>
		        <input type="password" id="inputPassword" className="form-control" placeholder="密码" required/>
		        <div className="checkbox">
		          <label><input type="checkbox" value="remember-me"/>记住我</label>
		        </div>
		        <button className="btn btn-lg btn-primary btn-block" type="submit" >注册</button>
		      </form>
    </div>
		)
		return(<div></div>)
	}
});
module.exports = Register;