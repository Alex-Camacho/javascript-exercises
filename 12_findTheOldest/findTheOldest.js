const findTheOldest = function(object) {
    const currentYear = (new Date()).getFullYear();
    for (i = 0; i < Array.length; i++){
    if (object[i].yearOfDeath === undefined){
        object[i].yearOfDeath = currentYear;
        };
    };
     const oldest = object.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) >
     (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
     return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;


