//Reverse a String: Write a function that reverses a given string.
function reverseString(temp){
    let newString = temp.split('').reverse().join("")
    return newString;
}

//Count characters
function countCharacters(strTxt) {
    return strTxt.length;
}

//Capitalize words
function capitalWords(sentences) {
    return sentences.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//FInd maximum
function findMax(arre) {
    return Math.max(...arre);
}

//Find minimum
function findMinimum(arrer){
    return Math.min(...arrer);
}

//Sum of array
function sumOfArray(arr, conditionFunction){
    return arr.filter(conditionFunction);
}

//Factorial
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}

//Prime number check
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

//Fibonacci sequence
function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[1 - 1] + fib[i - 2];
    }
    return fib.slice(0, n)
}