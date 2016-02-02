require(
	[
		'user',
		'post'
	], function(user, post){
  var user = new user(), post = new post();
  post.makePost();
});