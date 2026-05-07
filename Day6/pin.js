function person(name) {
    this.name = name;
}

person.prototype.sayhi = function(){
    console.log('hello ' + this.name)
}
const me = new person("aryan");
const you= new person("rahul");

me.sayhi();
you.sayhi();

console.log(Object.getPrototypeOf(me)=== person.prototype);
console.log(me.sayhi === you.sayhi);