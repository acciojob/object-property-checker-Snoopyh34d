// Define the global object sampleObject
const sampleObject = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
};

// Function to check if sampleObject contains the given key
function hasKey(key) {
    return sampleObject.hasOwnProperty(key);
}

// Examples
console.log(hasKey("red"));    // true
console.log(hasKey("blue"));   // false
console.log(hasKey("white"));  // true
