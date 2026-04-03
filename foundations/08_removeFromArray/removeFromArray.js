const removeFromArray = function(arr,...exclude) {
    return arr.filter((num ) => !exclude.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
