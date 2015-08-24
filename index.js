!function(){
  var prettyModule = {version: "1.0.0"}; // semver
  
  /* public members */
  prettyModule.saySomething = function(){
    return 'hi';
  }
  
  
  if (typeof define === "function" && define.amd) define(prettyModule);
  else if (typeof module === "object" && module.exports) module.exports = prettyModule;
  this.prettyModule = prettyModule;

}();
