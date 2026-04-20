const palindromes = function (str) {
    let noSpaces = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedNoSpaces = noSpaces.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return (noSpaces === reversedNoSpaces) ? true : false
};

// Do not edit below this line
module.exports = palindromes;
