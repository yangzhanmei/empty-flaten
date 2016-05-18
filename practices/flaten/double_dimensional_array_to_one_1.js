'use strict';

function double_to_one(collection) {
  var newCollection = buildOne(collection);

  return newCollection;
}

function buildOne(collection) {
  var newCollection = [];
  newCollection[0] = collection[0];

  for (var i = 1; i < collection.length; i++) {
    for(var j =0; j < collection[i].length; j ++){

      newCollection.push(collection[i][j]);
    }
  }

  return newCollection;
}

module.exports = double_to_one;
