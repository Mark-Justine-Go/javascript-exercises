const findTheOldest = function(arr) {
    return arr.reduce(function(oldestObj, currObj){
        if(!oldestObj.hasOwnProperty("yearOfDeath")) oldestObj.yearOfDeath = new Date().getFullYear();
        if(!currObj.hasOwnProperty("yearOfDeath")) currObj.yearOfDeath = new Date().getFullYear();

        const currAge = currObj.yearOfDeath - currObj.yearOfBirth;
        const oldestAges = oldestObj.yearOfDeath - oldestObj.yearOfBirth;
        return (currAge > oldestAges) ? currObj : oldestObj;
    },{name: "none", yearOfBirth: 0, yearOfDeath: 0})
};

// Do not edit below this line
module.exports = findTheOldest;
