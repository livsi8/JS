var fatRabbit = {
    name : "Жирненький",
    speak : speak
};

var thinRabbit = {
    name : "Тонкий",
    speak : speak
};

function speak (text){
    var kk = "A " + this.name + " кролик говорит " + text;
    return kk;
}
console.log(fatRabbit.speak("Я жирный"));
console.log(thinRabbit.speak("Я худой"));
