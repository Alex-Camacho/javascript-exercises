const removeFromArray = function(array, ...value) {
    
    for(i=0; i < array.length; i++){
        if(value.includes(array[i])){
            array.splice(i, 1);
            i--;
        }
    }
    
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

