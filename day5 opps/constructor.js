// class Animal {
//     constructor(ani) {
//         this.ani = ani;
//     }
//     speak() {
//         console.log(`${this.ani} makes a sound.`);
//     }
// }
 
// const dog = new Animal("Jhonny");
// const cat = new Animal("Whiskers");
// dog.speak();
// cat.speak();
 
class student{
    constructor(name){
        this.name= name;
    }
    study(){
        console.log(`${this.name} is studing`);
    }
}
const boy = new student("rahul");
boy.study();