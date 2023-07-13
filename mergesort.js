function split(wholeArray) {
  let mitad = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, mitad);
  let secondHalf = wholeArray.slice(mitad);

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let acumulador = [];

  while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] < secondHalf[0]) {
      acumulador.push(firstHalf.shift());
    } else {
      acumulador.push(secondHalf.shift());
    }
  }

  return [...acumulador, ...firstHalf, ...secondHalf];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let [firstHalf, secondHalf] = split(array);

  let sortedFirst = mergeSort(firstHalf);
  let sortedSecond = mergeSort(secondHalf);

  return merge(sortedFirst, sortedSecond);
}
