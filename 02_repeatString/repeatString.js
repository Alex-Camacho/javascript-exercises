const repeatString = function(string,number) {
    let stringContainer = "";
    if(number <0) return "ERROR";
    for(i=1; i <= number; i++){
        
        stringContainer += `${string}`;
    } return stringContainer;

};

// Do not edit below this line
module.exports = repeatString;
