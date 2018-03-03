var BlogResultModel = function() {
	this.$mid = "blogResult";
	// this.$prefix = "blog_";

	this.blog = "$type:Object;ref:blog";
	this.author = "$type:Object;ref:author";
	// this.comments = "$type:Array;ref:comment";
	this.commentResults = "$type:Array;ref:commentResult";
}

BlogResultModel.prototype.run = function() {
	console.log();
	console.log('======================');
	console.log();
	console.log(this.blog.toJSON());
	console.log(this.author.toJSON());
	console.log(JSON.parse(JSON.stringify(this.commentResults)));
}

module.exports = BlogResultModel;