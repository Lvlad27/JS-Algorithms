/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!
*/

// METHOD 1
function binaryAgent(str) {
    // Separate the string into an array of strings separated by whitespace.
    let strArr = str.split(" ");
    let arr = [];
    // Iterate through each binary string in the new array.
    for (let i = 0; i < strArr.length; i++) {
        // Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers. Use String.fromCharCode() method to convert the decimal to letter.
        arr.push(String.fromCharCode(parseInt(strArr[i], 2)));
    }
    return arr.join("");
}

console.log(
    binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
);
