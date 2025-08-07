// Takes array of strings and works out the largest digit sum 
// present in the array.
// 
// Arguments: array of string called "strings"
// 
// Returns integer maxSum, the largest found sum of digits 
// in the array


const largestDigitSum = ( strings ) => {
    // initialise variable to hold the largest sum
    let maxSum = 0; 

    // loop through each string in the array
    for ( const string of strings ) { 
        // initialise variable to hold the sum of digits in the current string
        let currentSum = 0; 
        
        // split string into separate characters
        const characters = string.split(""); 

        // loop through each character, if it can be parsed into an integer,
        // add to the sum of currentSum
        for (const character of characters) { 
            if (Number.isInteger(parseInt(character))) {
                currentSum += parseInt(character);
            }
        }

        // if the completed sum of digits in the string is greater than maxSum 
        // value, set the value of maxSum to currentSum
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    } 
    return maxSum; // returns the greatest digit sum 
}

// export for testing file
module.exports = largestDigitSum;