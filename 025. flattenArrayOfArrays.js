/*
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

// METHOD 1
function steamrollArray(arr) {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatArr = flatArr.concat(steamrollArray(arr[i]));
      } else {
        flatArr.push(arr[i]);
      }
    }
    return flatArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));

  /*
  METHOD 2

  function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

Code Explanation

    Use spread operator to concatenate each element of arr with an empty array
    Use Array.some() method to find out if the new array contains an array still
    If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
    If it does not, return the flattened array

METHOD 3

