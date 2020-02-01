function solve (num){
    let sum = num;

    function add(nextNum) {
        sum += nextNum;
        return add;
    }

    add.toString = () => sum;
    return add;
}
