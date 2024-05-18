//1
function printNumbers() {
    for (let i = 1; i <= 135; i++) {
        console.log(i);
    }
}


printNumbers();

//2

function printOddNumbers() {
    for (let i = 1; i <= 135; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


printOddNumbers();

//3

function printNumbersAndSum() {
    let sum = 0;

    for (let i = 1; i <= 135; i++) {
        sum += i;
        console.log("Number is:", i, "Sum:", sum);
    }
}


printNumbersAndSum();

//4

function printArrayElements(X) {
    for (let i = 0; i < X.length; i++) {
        console.log(X[i]);
    }
}


let X = [1, 4, 2, 12];


printArrayElements(X);

//5

function findMax(X) {
    
    let max = X[0];

    
    for (let i = 1; i < X.length; i++) {
       
        if (X[i] > max) {
            max = X[i];
        }
    }

    return max;
}


let X1 = [2, -3, -1];
let X2 = [5, 0, -10, 20];


console.log("Max of X1:", findMax(X1)); 
console.log("Max of X2:", findMax(X2)); 

//6

function getAverage(X) {
    
    let sum = X.reduce((acc, curr) => acc + curr, 0);

    
    let average = sum / X.length;

    return average;
}


let X = [2, 1, 3];


console.log("Average of X:", getAverage(X));

//7

function eliminateNegatives(X) {
    
    for (let i = 0; i < X.length; i++) {
       
        if (X[i] < 0) {
            X[i] = 0;
        }
    }

    return X;
}


let X = [2, -1, 4, -3];


console.log("Modified X:", eliminateNegatives(X)); 

//8

function convertNegativesToStrings(x) {
    
    for (let i = 0; i < x.length; i++) {
       
        if (x[i] < 0) {
            x[i] = 'Turing';
        }
    }

    return x;
}


const x = [1, -4, 0, -1];


console.log("Modified x:", convertNegativesToStrings(x)); 
