var arr1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];  //17
var arr2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
var arr3 = [7, 0, 1, 3, 4, 1, 2, 1] // 9
var arr4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
var arr5 = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
var arr6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
var arr7 = [2, 2, 2, 2, 2] // 0

function findWater(arr) {
  var max = (n1, n2) => {
    return n1 > n2 ? n1 : n2;
  };
  var min = (n1, n2) => {
    return n1 > n2 ? n2 : n1;
  };

  var maxLeft = {}, maxRight = {};
  for (var i = 0; i < arr.length; i++) {
    maxLeft[i] = max(arr[i], (i != 0) ? maxLeft[i - 1] : 0);
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    maxRight[i] = max(arr[i], i < (arr.length - 1) ? maxRight[i + 1] : 0);
  }
  var water = 0;
  for (var i = 0; i < arr.length; i++) {
    water += min(maxLeft[i], maxRight[i]) - arr[i];
  }
  return water;
}

console.log(findWater(arr1));
console.log(findWater(arr2));
console.log(findWater(arr3));
console.log(findWater(arr4));
console.log(findWater(arr5));
console.log(findWater(arr6));
console.log(findWater(arr7));
