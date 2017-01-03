'use strict';

module.exports = exports = {};

exports.helloFriend = function(name){
  if (name.length === 0) throw new Error('Name not provided.');
  console.log('Hello friend, your name is: ' + name);
};
