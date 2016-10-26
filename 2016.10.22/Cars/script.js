var Toyota = {
    Name : "Toyota",
    Year : 1998,
    Engine : "super"
};

var Ford = {
    Name : "Ford",
    Year : 1977,
    Engine : "puper",
    Ouner : {
        _name : "Bill",
        _age : 45
    }
};
var counter = 0;
var kk = "";
function calcFunction (obj){
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
         kk += key + " : " + obj [key] + "\n";
        counter++;

    }
    kk += "\n" + counter;
    //alert(counter);
    //alert(kk)
    //alert() ;
    return kk;
}

console.log(calcFunction(Ford));
