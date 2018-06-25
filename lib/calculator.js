
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    try {
        if(y === 0) throw 'Attempt to divide by zero (0)'
        return x / y;
    }
    catch(err) {
        return err;
    }
}


module.exports = {
    add,
    subtract,
    multiply,
    divide
};