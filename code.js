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
    return (parseFloat(hopefullyEven)% 2 === 0);
}