function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // let start = 0
  for (let start = 0; start < arr.length; start++){
    for (let current = start; current > 0 && arr[current-1] > arr[current]; current-- ) {
      let swap = arr[current]
      arr[current] = arr[current-1]
      arr[current-1] = swap
    }
  }
}
