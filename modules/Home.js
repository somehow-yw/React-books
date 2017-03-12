var React = require('react');
var NavLink = require('./NavLink');
var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url1:'http://localhost:3000/ctbooks',
			url2:'http://localhost:3000/books',

		}
	},
	getInitialState:function(){
		return {
			list:[],
			list2:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url1}).then(function(res){
			_this.setState({
				list: res
			})
		});
		$.ajax({url:this.props.url2}).then(function(res2){
			_this.setState({
				list2:res2
			})
		})
	},
	render:function(){
		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list.slice(0,6);
			var listLen = data.length;
			for(var i =0;i<listLen;i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div>
					<div className="col-lg-4 text-center" key={i}>
			          <img className="img-circle text-center" 
			          src={data[i].images.small}
			          alt="Generic placeholder image" width="140" height="140"/>
			          <h2>{data[i].title}</h2>
			          <p className="bookSummary">{data[i].summary}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详细信息>></NavLink></p>
			        </div>
			        </div>
				)
			}
			if(this.state.list2.length>0){
				var lst2=[];
				var data2=this.state.list2.slice(0,6);
				var listLen2=data2.length;
				
				for(var j=0;j<listLen2;j++){
					var detailUrl2 = "/detail/" + data2[j].id;
					
					lst2.push(
				<div>
					<div className="col-lg-4 text-center" key={data2[j].id}>
			          <img className="img-circle text-center"  src={data2[j].images.small}
			          alt="Generic placeholder image" width="140" height="140"/>
			          <h2>{data2[j].title}</h2>
			          <p className="bookSummary">{data2[j].summary}</p>
			          <p>
			          <NavLink to={detailUrl2} className="btn btn-default" role="button">
			         	查看详细信息>></NavLink></p>
			        </div>
				</div>
						)
				}
			}
		};

		return (
			<div className="container marketing">
		      <div className="row">
		      <h1 className="well text-center">青春小说</h1>
		        {lst}
		       
		        <NavLink to="/list/qc" type="button" className="btn btn-danger">查看列表</NavLink>
		         <h1 className="well text-center">科幻小说</h1>
		        {lst2}
		        <NavLink to="/list/kh" type="button" className="btn btn-danger">查看列表</NavLink>
		      </div>
			</div>
		)
	}
});

module.exports = Home;