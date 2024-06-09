const modifyString = (str) => {
    let modifiedString = str;

    // Check for divisibility by 15 (both 3 and 5)
    if (str.length % 3 === 0) {
        // Reverse the string first
        modifiedString = str.split('').reverse().join('');
    }

    // Check for divisibility by 5 (after potential reversal)
    if (modifiedString.length % 5 === 0) {
        const asciiCodes = [];
        for (let i = 0; i < modifiedString.length; i++) {
            asciiCodes.push(modifiedString.charCodeAt(i));
        }
        modifiedString = asciiCodes.join(' ');
    }

    // Check for divisibility by 3 only (if not already reversed for divisibility by 15)
    if (str.length % 15 == 0) {
        let modifiedString = str.split('').reverse().join('');
        console.log(modifiedString)
        const asciiCodes = [];
        for (let j = 0; j < modifiedString.length; j++) {
            asciiCodes.push(modifiedString.charCodeAt(j));
        }
        return modifiedString = asciiCodes.join(' ');
    }


    return modifiedString;
}

// Example usage
const string1 = "Hello"; // Divisible by 5
const string2 = "This is a test "; // Divisible by 3
const string3 = "eikooCpihCetsss"; // Divisible by 15
const string4 = "Not divisible by 3, 5, or 15";

console.log("Original String:", string1);
console.log("Modified String:", modifyString(string1), string1.length); // olleH (reversed)

console.log("Original String:", string2);
console.log("Modified String:", modifyString(string2), string2.length); // 84,104,105,32,108,101,115,116 (ASCII codes)

console.log("Original String:", string3);
console.log("Modified String:", modifyString(string3), string3.length); // gnirts tset rogger ol a siht (reversed first, then ASCII codes)

console.log("Original String:", string4);
console.log("Modified String:", modifyString(string4), string4.length); // Not divisible by 3, 5, or 15 (original string returned)
