// helloWorld function
function helloWorld() {
    return "Hello, World!";
}


function sayHello(name) {
    if (typeof name === "string") {
        if (name === "") {
            return "Hello, World!";
        }
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}


function isFive(hopefullyFive) {
    return parseFloat(hopefullyFive) === 5;
}


function isEven(hopefullyEven) {
    return (parseFloat(hopefullyEven) % 2 === 0);
}


function isVowel(char) {
    if (typeof char === "string") {
        return char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "i" || char.toLowerCase() === "O" || char.toLowerCase() === "U";
    } else {
    return false;
    }
}
