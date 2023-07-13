function bubbleSort(array = []) {
  if (array.length === 0) return [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      swap(array, j);
    }
  }
  return array;
}
function swap(array, j) {
  if (array[j] > array[j + 1]) {
    let n3 = array[j + 1];
    array[j + 1] = array[j];
    array[j] = n3;
  }
}
