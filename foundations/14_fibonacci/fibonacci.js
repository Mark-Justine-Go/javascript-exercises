const fibonacci = function(nth) {
    if(nth < 0) return "OOPS"
    let series = [];
    for(let i = 0; i <= nth; i++){
        if(i === 0 || i === 1){
            series.push(i);
        }else{
            const sum = series[series.length-1]+series[series.length-2];
            series.push(sum);
        }
    }

    return series[series.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
