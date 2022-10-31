const fibonacci = function(a) {
    if(a < 0){
        return "OOPS";
    }
    let fibo = [1, 1];
    let number;
    for(i = 1; i < 50; i++){
        number = fibo[i] + fibo[i - 1];
        fibo.push(number);
    }
    return fibo[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
