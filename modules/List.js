var React = require('react');
var NavLink = require('./NavLink');
var listUrl = window.location.hash;
var listUrlName=listUrl.slice(7,9);
console.log(listUrlName);
var List = React.createClass({
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
		if(listUrlName=="qc"){
		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list;
			var listLen = data.length;
			for(var i =0;i<listLen;i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div>
					<div className="col-lg-4 text-center" key={data[i].id}>
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
		}
	}	;
	if(listUrlName=="kh"){
		if(this.state.list2.length>0){
			var lst2 = [];
			var data2 = this.state.list2;
			console.log(data2);
			var listLen2 = data2.length;
			for(var i =0;i<listLen2;i++){
				var detailUrl2 = "/detail/" + data2[i].id;
				lst2.push(
					<div>
					<div className="col-lg-4 text-center" key={data2[i].id}>
			          <img className="img-circle text-center" 
			          src={data2[i].images.small}
			          alt="Generic placeholder image" width="140" height="140"/>
			          <h2>{data2[i].title}</h2>
			          <p className="bookSummary">{data2[i].summary}</p>
			          <p>
			          <NavLink to={detailUrl2} className="btn btn-default" role="button">
			         	查看详细信息>></NavLink></p>
			        </div>
			        </div>
				)
			}
		}
	}
		return (
			<div>
				 {lst}
				 {lst2}
			</div>
		)
	}
});

module.exports = List;