define(['user'], function (mUser) {
  // load in user module
  var user = new mUser();
  var returnedModule = function () {
    var name = user.getName();

  	this.makePost = function (message) {
    	console.log( name + message + " posted at " + new Date() );
  	}
  };
  return returnedModule;
});