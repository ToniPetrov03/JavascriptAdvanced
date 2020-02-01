function solve (num){
    let sum = num;

    function addition(nextNum) {
        sum += nextNum;
        return addition;
    }

    addition.toString = () => sum;
    return addition;
}
