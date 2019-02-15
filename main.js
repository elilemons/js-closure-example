function sayHello(name) {
  let greeting = function (message) {
    return `${message} ${name}?`;
  }
  return greeting;
}

let hiAdam = sayHello("Adam");
console.log(hiAdam("How are you"));

let hiYasmine = sayHello("Yasmine");
console.log(hiYasmine("How are you"));

let hiDavid = sayHello("David");
console.log(hiDavid("How are you"));

let hiLisa = sayHello("Lisa");
console.log(hiLisa("How are you"));

// let names = ['Lisa', 'Justin', 'Kelsey', 'John'];
// for (let name of names) {
//   let hi = sayHello(name);
//   console.log(hi("How are you"));
// }