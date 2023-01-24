var Count = function(){
    var i = 0;
    return function(){
        return i++;
    };
};

var count = Count()

console.log(count());
console.log(count());
console.log(count());
console.log(count());

