var names = ['bba', "bubu", 'bibi', 'bimbi'];

names.forEach(function(name) {
    console.log(name);
});

names.forEach(n => console.log(n));

var returnMe = n => n + '!';

console.log(returnMe('buzbu'));

var person = {
  name: 'mii',
  greet: function(name) {
    names.forEach(function(name){
      console.log(this.name+' says hi to '+name);
    })
  },
  greet2: function(name) {
    names.forEach((name) => {
      console.log(this.name+' says hi to '+name);
    })
  }
}

console.log(person.name);
person.greet();
person.greet2();

var add = (a,b) => a+b;

console.log(add(1,3));
console.log(add(9,0));
