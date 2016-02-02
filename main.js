require(
	[
		'jquery-2.2.0.min'
	],
	function(jq){
		console.log('main is loaded', jq);


		$('body').html('can now use jquery');
	}
);