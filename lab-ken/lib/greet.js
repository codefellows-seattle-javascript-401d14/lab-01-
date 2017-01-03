'use strict';

module.exports = function greet (name){
  if(typeof name == 'string'){
    return 'Hello, ' + name;
  }
  else{
    return null;
  }

};
