// Creating an object myinfo
let myinfo = {
  name: "Abubakar Abdulkarim Baffa",
  dob: 1988,
  address: No. 7 Steel Rolling Estate, Katsina State,
  hobbies: "reading", "traveling", "research",
  age: function age(dob) {
    return 2026 - dob;
  }
};

// Accessing properties and method of the person object
console.log(person.name); // Output: Bella Nwachukwu
console.log(person.address.city); // Output: Lagos
console.log(person.hobbies[0]); // Output: reading
console.log(person.greet()); // Output: Hello, my name is Bella Nwachukwu and I am 29 years old.