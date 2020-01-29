// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

//First and second failed attempts
// let students = ["Cadence", "Ordel", "Marion"];
// let idx =students.indexOf("Marion");
// students.splice(index, 2);
// students;

// let students = ["Cadence", "Ordel", "Marion"];
// function remove (students){
//     let idx=students.indexOf("Marion");
//     students.slice (idx,2);
// }

//Failed third attempt
// let students = ["Cadence", "Ordel", "Marion"];
// let noMarion = students.reduce(function (current, student){
//     if (student="Marion"){
//         return student;
//     } else {
//         return current
//     }
// }

//Failed 4th attempt
// function remove (students){
//     let students = ["Cadence", "Ordel", "Marion"];
//     let idx = students.indexOf("Marion")
//     for (let student of students){
//         students.splice(idx, 2)
//     } return students;
// }

//Failed 5th attempt
// function remove (students){
//     let students = ["Cadence", "Ordel", "Marion"];
//     let idx = students.indexOf("Marion");
//     students.splice(idx, 2);
//     } 


// function remove (){
//     let students = ["Cadence", "Ordel", "Marion"];
//     // let count=0
//     while (students.includes ("Marion")){
//         students.splice ("Marion");
//         // count++;
//     } return students;
// }
// as long as the way the array includes the item (.includes) 
// don't use splice, slice 

// function remove (){
//     let students = ["Cadence", "Ordel", "Marion"]
//     let idx = students.indexOf("Marion")
//     students.splice(idx, 2)
//     students
// }

// function remove (arr, item){
//     while (arr.includes(item)){
//     arr.splice(arr.indexOf(item),1)
//     }return arr;
// }

function remove(arr, item) {
    let newArray = [];
    for (let i = 0; i < arr.length;) {
        if (arr[i] !== item) {
            newArray.push(arr[i])
            i++;
        } else i++
    } return newArray;
}


remove(['Cadence', 'Ordel', 'Marion'], 'Marion')

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// function remove (arr, item){
//     let newArr=arr;
//     while (newArr.includes(item)){
//     newArr= newArr.slice(arr.indexOf(item))
//     } return newArr;
// }

// function remove (arr, item){
//     while (arr.includes(item)){
//     arr= arr.slice(arr.indexOf(item))
//     } return arr;
// }

// function remove (arr, item){
//     let newArr=arr;
//     for (let item of arr){
//         Array.push(item);
//     }
// }

//See above for the correct answer

// ([begin[, end]])


// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

// let numbers = [1, 2, 3, 4]
// let sumTwo = 0

// function sum (){
//     for (let number of numbers){
//         sumTwo += number
//     } return sumTwo
// }

function sum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    }, 0);
}

// arrSum = function(arr){
//   return arr.reduce(function(a,b){
//     return a + b
//   }, 0);
// }
//FROM THE INTERNET

// function sum (){
//     for (let num of numbers){
//         sum += num;
//     } 
// }
//Not sure if this works

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// var arr = [5, 10, 15, 20]

// function average (arr){
//     return arr.reduce(function(a,b){
//     return a+b;
//     }, 0)/(arr.length);
// }

// console.log (average(arr));

// var arr = [5, 10, 15, 20]

function average(arr) {
    if (arr.length > 0) {
        return arr.reduce(function (a, b) {
            return a + b;
        }, 0) / (arr.length);
    }
}
console.log(average(arr));

//This is a great example of having to have a length greater than zero so that NaN becomes undefined. 

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

// function minimum (arr){
//     if (arr.length>0){
//         Math.min(arr);
//     } console.log (minimum(arr));
// }

var arrTwo = [5, 10, 15, 20]

function minimum(arrTwo) {
    if (arrTwo.length > 0) {
        return Math.min(...arrTwo);
    }
}
//arrMax = function(arr){
//     return Math.max(...arr);
// }



// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.


//Courtesy of https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayCopy = array.slice(0);

function swap(arrayCopy, i, j){
    var temp = arrayCopy[i];
    arrayCopy[i]= arrayCopy[j];
    arrayCopy[j]=temp;
}

function selectionSort(arrayCopy){
    for(var i=0; i<arrayCopy.length; i++){
        var min = i;
        for (var j=i+1; j<arrayCopy.length; j++){
            if(arrayCopy[j]<arrayCopy[min]){
                min=j;
            }
        }
        if(i!==min){
            swap(arrayCopy,i,min);
        }
    }
    return arrayCopy;
}

console.log(selectionSort(arrayCopy));

//From the sorting repo I found: https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript
// array to sort
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function selectionSort(array) {
//   for(var i = 0; i < array.length; i++) {
//     var min = i;
//     for(var j = i + 1; j < array.length; j++) {
//       if(array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if(i !== min) {
//       swap(array, i, min);
//     }
//   }
//   return array;
// }

// console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//Third failed attempt, but closer
// var array = [20, 10, 15, 5]
// var arrayCopy = array.slice(0);

// function selectionSort (arrayCopy){
//     for (let i = 0; i<arrayCopy.length; i++){
//         let min=i;
//         for (let j=i++; j<arrayCopy.length; j++){
//             if(arrayCopy[min]>arrayCopy[j]){
//                 min=j;
//             }
//         }
//         if (min !== i){
//             let tmp = arrayCopy[i];
//             arrayCopy[i]=arrayCopy[min];
//             arrayCopy[min]=tmp;
//         }
//     }
//     return arrayCopy;
// }




// var array = [20, 10, 15, 5]
// var arrayCopy = array.slice(0);

// Second failed attempt
// var array = [20, 10, 15, 5];
// var arrayCopy = array.slice(0);

// function selectionSort(arrayCopy) { 
    
//     if (array.length>0){
//     for (let i = 0; i < array.length;) {
//         if (array[i] === Math.min(array)) {
//             arrayCopy.shift(array[i]);
//             i++;
//         } 
//     }    
//     }
// }
// selectionSort(array);

// function remove(arr, item) {
//     let newArray = [];
//     for (let i = 0; i < arr.length;) {
//         if (arr[i] !== item) {
//             newArray.push(arr[i])
//             i++;
//         } else i++
//     } return newArray;
// }

// First failed attempt
// function minimum(array) {
//     if (array.length > 0) {
//         arrayCopy.push(Math.min(...array));
//     } i++;
// }
// } return arrayCopy;
// }

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList (arrayOne){
    var newArray = [];
    if(arrayOne.filter(arrayOne => typeof arrayOne === 'string' && arrayOne.length > 0)){
    arrayOne.concat(newArray);
    } return arrayOne;
}


//First failed attempt
// function textList (arrayOne, arrayTwo){
//     if(arrayOne.filter(x => typeof x === 'string' && x.length > 0) && arrayTwo.filter(x => typeof x === 'string' && x.length > 0)){
//     arrayOne.concat(arrayTwo);
//     } return
// }