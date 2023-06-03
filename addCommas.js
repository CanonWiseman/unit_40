function addCommas(num) {
    let numToString = num.toString(); 
    let isNegative = false
    if(numToString[0] === "-"){
        isNegative = true
        numToString = numToString.replace("-", "");
    }
    let returnStr = reverseString(numToString);
    let amtCommas = 0;
    
    
    for(let i = 3; i < numToString.length; i += 3){

        returnStr = insertAtIndex(returnStr, ",", i + amtCommas);
        amtCommas ++;
    }
    
    if(isNegative){
        returnStr = insertAtIndex(returnStr, "-", returnStr.length);
    }
    
    return(reverseString(returnStr));
}

function insertAtIndex(str, substring, index) {
    return str.slice(0, index) + substring + str.slice(index);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

module.exports = addCommas;