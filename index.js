function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        lengthCounter++; // Increment character count

        // Check if the character is a letter (a-z, A-Z)
        if (/[a-zA-Z]/.test(char)) {
            // Increment word count if the previous character was not a letter or space
            if (i === 0 || !/[a-zA-Z\s]/.test(sentence[i - 1])) {
                wordCounter++;
            }

            // Check if the character is a vowel (a, e, i, o, u, A, E, I, O, U)
            if (/[aeiouAEIOU]/.test(char)) {
                vowelCounter++;
            }
        }
    }

    // Output the results
    console.log("Length of sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage:
let inputSentence = "Hello, how are you?"; // Assuming the sentence ends with a point
analyzeSentence(inputSentence);
