function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var newArr = [1, 2, 3];
  newArr.forEach(callback);
  return newArr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}