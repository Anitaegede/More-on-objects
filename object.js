let cat = {
    name: "Donald",
    walk() {
        console.log("I am walking")
    },
    eat() {
        console.log("Cats love fish")
    },
    identifyYourSelf(){
        console.log("I am " + this.name)
    },
    showYourSelf(){
        console.log(this)
    },
    setAge(_age){
        this.age=_age
    },
    getAge(){
    if(this.age){
        return  this.age
    }
    // this.age=400
    this.setAge(400)
    return this.age
    }
    
}
cat.walk()
cat.eat()
cat.identifyYourSelf()
cat.showYourSelf()
// cat.setAge(16)
console.log(cat)
console.log(cat.getAge())
console.log(cat.hasOwnProperty("age"))
console.log(cat.hasOwnProperty("hand"))
let keys =Object.keys(cat)
console.log(keys)
let values=Object.values(cat)
console.log(values)
let entries=Object.entries(cat)
console.log(entries)