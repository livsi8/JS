var protoRabbit = {
  speak: function(text) {
    console.log("А " + this.name + " кролик говорит: '" +  text + "'\nИмя: " + this.name + "\nЦвет: " + this.color + "\nВозраст: " + this.age + "\nДлина ушей: " + this.lengthEars);
  }
};
var fatRabbit = Object.create(protoRabbit);
fatRabbit.name = "Толстый";
fatRabbit.color = "blue";
fatRabbit.age = 24;
fatRabbit.lengthEars = 15;
fatRabbit.speak("Я жирный кроль");

var thinRabbit = Object.create(protoRabbit);
fatRabbit.name = "Тонкий";
fatRabbit.color = "grey";
fatRabbit.age = 14;
fatRabbit.lengthEars = 18;
fatRabbit.speak("Я худенький кроль");

var whiteRabbit = Object.create(protoRabbit);
fatRabbit.name = "Белый";
fatRabbit.color = "ping";
fatRabbit.age = 12;
fatRabbit.lengthEars = 10;
fatRabbit.speak("Я снежный кроль");
