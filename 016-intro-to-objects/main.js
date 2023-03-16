const myArr = [];

// console.log(typeof myObJ)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9;
//const myWorkout = {
//a: "Weightlifting",
//};

//console.log(Object.values(myWorkout));
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
  increaseLikes: function () {
    this.likes += 1;
  },
};
const HentsaObj = myObj;
HentsaObj.increaseLikes();
console.log(HentsaObj);
HentsaObj.age = 19;

const greeting = myObj.myGreeting("Chris");
console.log(greeting);

console.log(myObj.mobile.make.length);

for (key in myObj) {
  console.log("key ${key} and value ${myObj[key]} ");
}
