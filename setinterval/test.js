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