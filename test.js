const toNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
  }
};

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  toNumbers(arr);
  let max = arr[0].toString(10);
  let min = arr[0].toString(10);
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i].toString(10);
    }
    if (min > arr[i]) {
      min = arr[i].toString(10);
    }
  }
  return `${max} ${min}`;
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
