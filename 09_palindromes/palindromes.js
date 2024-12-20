const palindromes = function (str) {
    let cleanedStr = ""

    for(let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase()

        if((char >= "a" && char <= "z") || (char >= '0' && char <= '9') ){
            cleanedStr += char
        }

    }

    const reversedStr = cleanedStr.split("").reverse().join("")
    return cleanedStr === reversedStr

   

};

// Do not edit below this line
module.exports = palindromes;
