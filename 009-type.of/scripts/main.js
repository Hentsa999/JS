let foo = 42
let newVar = "Something"
const myConst = 42

console.log("Foo is 42 which is typeof ", (typeof foo))

foo = "bar"
console.log("Foo is bar which is typeof", (typeof foo))

foo = true
console.log("Foo is true which is typeof", (typeof foo))

foo = 42
const result = foo + '1'
console.log("result is 42 + 1 is typeof - ", (typeof result))

if (true){
    const myConst = 42
    console.log(myConst)
}

