'use strict';

module.export = function greet(name) {
  if(name.length === 0){
    console.log('No name present');
  } else {
    console.log('Hello ' + name);
  }
};
