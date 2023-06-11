 let inputValue = document.getElementById("numValue");
 let myButton = document.getElementById("convert-btn");
 let getAnswer = document.getElementById("answer");
 
// Reset Function to clear all field 
function clearInput() {
 document.getElementById("numValue").value = "";
 getAnswer.textContent = "";
};


 



let goButton = myButton.addEventListener("click", function() {
    
    //Assign varaiable to input field Value
    let inputNumber = inputValue.value;
    // Assign varaiable & argument  to function convertRoman 
    let finalAnswer = convertToRoman(inputNumber);
    // change the content answer field to Final answer 
    getAnswer.textContent = finalAnswer;
    
    function convertToRoman(num) {
 
        //Split number into separate digits. Since roman numerals only go up to 1000, convert the digits through the hundreds place using a converter function (that's adaptable to the different orders of magnitude), then add the appropriate number of M's for larger numbers.
        
        if (num <= 0) {
            return "Error: Must give positive integer"
        }
    
        let digits = num.toString().split("");
        let romanArray = [];
        let mag = 0;
        let currNum = 0;
        //While loop to cycle through ones, tens, and hundreds if present
        while (mag <= 2 && digits.length > 0) {
            currNum = parseInt(digits.pop()); //Convert array entries from strings to numbers
            romanArray.unshift(convertDigit(currNum, mag)); //add roman numeral segments in the appropriate order
            mag++
        }
        //Add necessary M's for larger numbers
        if (digits.length > 0) {
            romanArray.unshift("M".repeat(parseInt(digits.join(""))))
        }
        return romanArray.join("");
    }
    
    function convertDigit(num, mag) {
        /*
    
        Takes digit and place/magnitude (ones = 0, tens = 1, hundreds = 2) and converts to roman numerals. Only works for digits in these places.
    
        I = 1
        V = 5
        X = 10
        L = 50
        C = 100
        D = 500
        M = 1000
         */
    
        //Not filtering for single digit numbers, positive numbers, or magnitudes other than 0, 1, or 2 since this is only called in the larger function.
    
        let romans = ["I", "V", "X", "L", "C", "D", "M"];
        let index = 2 * mag;
        if (num === 0) {
            return "";
        }
        if (num >= 1 && num <= 3) {
            return romans[index].repeat(num);
        }
        if (num === 4) {
            return romans[index] + romans[index+1];
        }
        if (num === 5) {
            return romans[index+1];
        }
        if (num >= 6 && num <= 8) {
            return romans[index+1] + romans[index].repeat(num-5);
        }
        if (num === 9) {
            return romans[index] + romans[index+2];
        }
    }
    //let finalAnswer = convertToRoman(inputNumber);
    //console.log(convertToRoman(inputNumber)); 
    //console.log(inputNumber)
    //getAnswer.textContent =  inputValue.value;
    //getAnswer.textContent = finalAnswer;
 }); 

/*JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/