'use strict';

const goodbye = module.exports = {};

goodbye.bye = function(name){
  return 'see ya later ' + name;
};

goodbye.peace = function(name){
  return 'tata forever ' + name;
};

goodbye.peaceOut = function(name){
  return 'tata fernow' + name;
};
