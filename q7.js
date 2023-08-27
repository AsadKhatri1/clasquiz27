// Write a JS code to find the largest number in an array

let array = [3, 5, 7, 4, 8, 9, 5, 10]
let largest;
for (l = 0; l<array.length; l++) {
    if (array[l] > array[l-1]) {
        largest = array[l]
    }
}
console.log('Largest',largest);
