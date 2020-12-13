// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

/*
    function findUnique(arr) {
      return arr.find(
        (element, index, array) =>
          array.indexOf(element) === array.lastIndexOf(element),
      );
    }

    console.log(findUnique([0, 1, 0])); // 1
    console.log(findUnique([1, 1, 1, 2, 1, 1])); // 2
    console.log(findUnique([3, 10, 3, 3, 3])); // 10
*/

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function findUnique(arr) {
  return arr.filter(
    (element, index, array) => array.indexOf(element) === index,
  );
}

console.log(findUnique(['a', 1, 'a', 2, '1'])); // ['a', 1, 2, '1']

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
