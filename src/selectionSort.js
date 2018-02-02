function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let current = 0; current < arr.length; current++) {
    let mindex = current
    for (let test = current; test < arr.length; test++) {
      if (arr[test] < arr[mindex]){
        mindex = test
      }
    }
    let swap = arr[mindex]
    arr[mindex] = arr[current]
    arr[current] = swap
  }
}
