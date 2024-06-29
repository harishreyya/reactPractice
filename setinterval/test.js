// function getAge(...args){
//     console.log(typeof args)
// }
// getAge(21);

// output : object

// ------------------------------

// const fo = () => console.log("f");
// const ba = () => setTimeout(()=> console.log("scnd"))
// const go = () => console.log("third");

// fo(); ba(); go()

// const obj = {a: "one", b:"two", a:"three"};
// console.log(obj)
// ------------------------------------

// String.prototype.giveLydiaPizza = ()=>{
//     return 'Just give pizza'
// }
// const name = "Lydua"
// console.log(name.giveLydiaPizza())

// ------------------------------------
// const sum = eval('10*10+5');
// console.log(sum)
// ------------------------------------
// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num);

// ----------------------------

// function init() {
   
//     var name = "Mozilla"; // name is a local variable created by init
//     displayName();
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
    
//   }
//   init();


// let arr = [2,3,4,5,6,4,3,3,7,8,]

// function duplicate(){
//     return [...new Set(arr)]
// }

// console.log(duplicate())

// let str = "one little elephant sit on wall"

// let res = str.split(" ").map(word => word.length);

// console.log(res)

// function findRepeatedNumbers(arr) {
//     const seen = new Set();
//     const repeated = new Set();
//     for (let num of arr) {
//         if (seen.has(num)) {
//             repeated.add(num);
//         } else {
//             seen.add(num);
//         }
//     }
//     return Array.from(repeated);
// }

// const numbers = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 8];
// const repeatedNumbers = findRepeatedNumbers(numbers);
// console.log(repeatedNumbers);  

// ------------------------

// function findRepeatedNumbers(arr) {
//     const frequency = {};
//     const repeated = [];

//     // Count the frequency of each number
//     for (let num of arr) {
//         if (frequency[num]) {
//             frequency[num]++;
//         } else {
//             frequency[num] = 1;
//         }
//     }

//     // Find numbers that appear more than once
//     for (let num in frequency) {
//         if (frequency[num] > 1) {
//             repeated.push(Number(num));
//         }
//     }

//     return repeated;
// }

// const numbers = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 8];
// const repeatedNumbers = findRepeatedNumbers(numbers);
// console.log(repeatedNumbers);  // Output: [2, 3, 8];

// let arr = [2,3,4,5,6,3,2,2,3,,5,6,6,6,2,7,7,8,4]
// let numTo = 4
// let res = arr.filter(num => num !== numTo)
// console.log(res)

// if (true) {
//     // let blockVar = 'I am block scoped';
//     // var blockVar = 'I am block scoped';
//     // console.log(blockVar); // I am block scoped
//   }
//   console.log(blockVar); 
// let functionVar = 'I am local out';
// function foo() {
//     let functionVar = 'I am local';
//     console.log(functionVar); // I am local
//   }
//   foo()
//   console.log(functionVar); 