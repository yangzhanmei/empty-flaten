'use strict';

function double_to_one(collection) {
  var newCollections = buildOne(collection);
  var result = buildResult(newCollections);

  return result;
}

function buildOne(collection) {
  var newCollections = [];

  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {

      newCollections.push(collection[i][j]);
    }
  }

  return newCollections;
}

function isExist(newCollection, result) {
  for (var i = 0; i < result.length; i++) {
    if (newCollection === result[i]) {
      return true;
    }
  }

  return false;
}

function buildResult(newCollections) {
  var result = [];

  for (var i = 0; i < newCollections.length; i++) {

    if (!isExist(newCollections[i], result)) {
      result.push(newCollections[i]);
    }
  }

  return result;
}

module.exports = double_to_one;
