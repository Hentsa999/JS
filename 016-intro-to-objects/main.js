const myArr = [];

// console.log(typeof myObJ)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9;
const myObj = {
  name: "Hentsa",
  age: "19",
  hobbies: ["Gym", "Playing guitar", "Playing games"],
  mobile: {
    make: "pixel 7 pro",
    Os: "android",
  },
  myGreeting: function (person) {
    return "${this.name} who loves to ${this.hobbies[0]} says What is Up ${person}";
  },
};

const greeting = myObj.myGreeting("Chris");
console.log(greeting);
