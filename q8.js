
// Write a JS program to get the sum of two arrays actually
// the sum of all their elements P.S. Each array includes only
// integer numbers. Output is a number too.


var arr = [2, 45, 3, 67, 45, 89, 56, 35]


var arr2 = [4, 34, 67, 89, 23, 43, 65, 32]
let sum = 0
let sum1 = 0

for (i = 0; i < arr.length; i++) {
    sum += arr[i]
}


for (j = 0; j < arr2.length; j++) {
    sum1 += arr2[j]
}


let total = sum + sum1
console.log(total)