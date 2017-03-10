var React = require('react');
var Detail = React.createClass({
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
			console.log(res)
			_this.setState({
				list: res
			})
		});
		$.ajax({url:this.props.url2}).then(function(res2){
			console.log(res2)
			_this.setState({
				list2:res2
			})
		})
	},
	render:function(){
		if(this.state.list.length!=0){
			var bookslen=this.state.list.length;
			var books=this.state.list;
			var thisbookid=this.props.params.id;
			for(var j=0;j<bookslen;j++){
				if(books[j].id==thisbookid){
					return (
						<div className="flex-box">
							<img  src={books[j].images.large} />
							<div className="jumbotron disline"  keys={books[j].id}>
							<h1>{books[j].title}</h1>
							<p>{books[j].summary}</p>
							<p><a className="btn btn-primary btn-lg" href={books[j].url} role="button">阅读原文</a></p>
							</div>
						</div>
							)
				}
			}
		}
		if(this.state.list2.length!=0){
			
			var books2len=this.state.list2.length;
			var books2=this.state.list2;
			var thisbookid2=this.props.params.id;
			for(var j=0;j<books2len;j++){
				if(books2[j].id==thisbookid2){
					return (
						<div className="flex-box">
							<img  src={books2[j].images.large} />
							<div className="jumbotron disline"  keys={books2[j].id}>
							<h1>{books2[j].title}</h1>
							<p>{books2[j].summary}</p>
							<p><a className="btn btn-primary btn-lg" href={books2[j].url} role="button">阅读原文</a></p>
							</div>
						</div>
							)
				}
			}
		};
		return (
			<div>
			</div>
		)
	}
});

module.exports = Detail;