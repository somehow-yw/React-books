var React = require('react');

var Register = React.createClass({
	handlerClick:function(){
		var uname=$("#inputEmail").val();
		var upsd=$("#inputPassword").val();
		var user={
			"username":"",
			"password":""
		};
		 var userlist= localStorage.userlist ==undefined ? [] : JSON.parse(localStorage.userlist);
		console.log(userlist);
		user.username=uname;
		user.password=upsd;
		userlist.push(user)
		localStorage.userlist=JSON.stringify(userlist)
	},
	render:function(){
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
		        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handlerClick}>注册</button>
		      </form>
    </div>
		)
		return(<div></div>)
	}
});
module.exports = Register;