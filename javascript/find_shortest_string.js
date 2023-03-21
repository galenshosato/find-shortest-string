//My Function
// function findShortestString(arr) {
//   let shortString = ''
//   let y = 0
//   for (string of arr) {
//     x = string.length

//     if (x === 0) {
//       shortString = string
//       return shortString
//     }
    
//     if (y === 0){
//       y = x
//       shortString = string
//     }

//     if (x < y && y !== 0) {
//       shortString = string
//       y = x
//     }
    
//   }
//   return shortString
// }

//Ben's Function
function findShortestString(arr) {
  let smallest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i]
    }
  }
  return smallest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
