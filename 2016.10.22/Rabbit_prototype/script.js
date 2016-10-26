function Animal (name, color, age, lengthEars){
    this.name = name;
    this.color = color;
    this.age = age;
    this.lengthEars = lengthEars;
}

var fatRabbit = new Animal ("Толстый", "blue", 24, 15);
var thinRabbit = new Animal ("Тонкий", "grey", 14, 18);
var whiteRabbit = new Animal ("Белый", "ping", 12, 10);

function speak (text){
    this.speak = text;
}

function say(obj) {
    console.log("А " + obj.name + " кролик говорит '" +  obj.speak + "'");
}

function param (obj){
    console.log(obj.name + " кролик сообщил, что его: \nцвет: " +  obj.color + "\nвозраст: " +  obj.age + "\nдлина ушей: " +  obj.lengthEars);
}
Object.prototype.speak = speak;

fatRabbit.speak("Я жирный кроль");
thinRabbit.speak("Я худенький кроль");
whiteRabbit.speak("Я снежный кроль");

say(fatRabbit);
say(thinRabbit);
say(whiteRabbit);
console.log("");

param(fatRabbit);
console.log("");

param(thinRabbit);
console.log("");

param(whiteRabbit);
