const sumAll = function(num1,num2) {
    if(!Number.isInteger(num1) || num1 < 0 || !Number.isInteger(num2) || num2 < 0) return "ERROR";
    let ordered = [num1,num2].sort((a,b) => a- b );
    let sum = 0;
    for(let i = ordered[0]; i <= ordered[1];i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
