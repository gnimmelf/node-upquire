var fs = require('fs');
var path = require('path');
var callerId = require('caller-id');

function isModulePath(modulePath) {
  //console.log(modulePath)
  return ( fs.existsSync( modulePath )
          || fs.existsSync( modulePath+'.js' ) );  
}

module.exports = function(modulePath, options) {  
  var basePath = path.dirname( callerId.getData().filePath );  
  if (basePath == '.') {
    // We're in the repl(?)
    var basePath = process.env.PWD;
  } 
  var baseParts = basePath.split(path.sep);  
  while (baseParts.length && !isModulePath( path.join( basePath, modulePath ) ) ) {
    baseParts.pop();
    basePath = baseParts.join(path.sep);
  };

  if (options && options.pathOnly) {
    return path.join( basePath, modulePath);
  } 
  else {
    return require( path.join( basePath, modulePath ) );    
  } 
};
