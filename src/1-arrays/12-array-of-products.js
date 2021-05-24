// More Optimized -> reduce Time by 1n and Space by 2n
// T: O(n) | S: O(n)
// 2 separate loops --> T: f(2n)
// 1 new array --> S: f(n)

function arrayOfProducts(arr) {
  const output = [];

  let leftRunningProd = 1;
  for (let i = 0; i < arr.length; i++) {
    output[i] = leftRunningProd;
    leftRunningProd *= arr[i];
  }

  let rightRunningProd = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] *= rightRunningProd;
    rightRunningProd *= arr[i];
  }

  return output;
}

// Optimized
// T: O(n) | S: O(n)
// where n = input array length
// 3 separate loops --> T: f(3n)
// 3 new arrays --> S: f(3n)

function arrayOfProductsO(arr) {
  const output = [];
  const leftProducts = [];
  const rightProducts = [];

  let leftRunningProd = 1;
  for (let i = 0; i < arr.length; i++) {
    leftProducts[i] = leftRunningProd;
    leftRunningProd *= arr[i];
  }

  let rightRunningProd = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    rightProducts[i] = rightRunningProd;
    rightRunningProd *= arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    output.push(leftProducts[i] * rightProducts[i]);
  }

  return output;
}


// Brute Force
// T: O(n^2) | S: O(n)
// where n = input array length

function arrayOfProductsBF(arr) {
  const output = [];

  let currentIdx = 0;
  let currentProd = 1;

  while (currentIdx < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (i === currentIdx) continue;
      currentProd *= arr[i];
    }
    output.push(currentProd);
    currentIdx++;
    currentProd = 1;
  }

  return output;
}


// TEST //
const arr1 = [5, 1, 4, 2];
console.log(arrayOfProducts(arr1));
console.log(arrayOfProductsO(arr1));
console.log(arrayOfProductsBF(arr1));