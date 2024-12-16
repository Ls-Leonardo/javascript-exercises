const reverseString = function(string) {
    if(string.length === 0){
        return ""
    }

    let reverse;
    reverse = string.split("")

    reverse = reverse.reverse()

    return reverse.join("")
    
};

// Do not edit below this line
module.exports = reverseString;
