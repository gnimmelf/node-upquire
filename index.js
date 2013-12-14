var fs = require('fs');
var path = require('path');
var callerId = require('caller-id');

module.exports = function(modulePath) {
  var basePath = path.dirname( callerId.getData().filePath );
  var baseParts = basePath.split(path.sep);
  while (baseParts.length && !fs.existsSync( path.join( basePath, modulePath ) ) ) {

    console.log( path.join( basePath, modulePath ) );

    baseParts.pop();
    basePath = baseParts.join(path.sep);
  };
  return require( path.join( basePath, modulePath ) );
};

