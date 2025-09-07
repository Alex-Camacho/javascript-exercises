const repeatString = function(string, num) {
    finalString = string;
    if(num === 0){
        finalString = '';
    }
    else if(num < 0){
        finalString = "ERROR";
    }
    for(i = 1; i < num; i++){
        finalString = finalString + string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
