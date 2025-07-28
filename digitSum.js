

const largestDigitSum = ( strings ) => {
    let maxSum = 0;

    for ( const string of strings ) {
        let currentSum = 0;
        
        const characters = string.split("");

        for (const character of characters) { 
            if (Number.isInteger(parseInt(character))) {
                currentSum += parseInt(character);
            }
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    } 
    return maxSum;
}

module.exports = largestDigitSum;