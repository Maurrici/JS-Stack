export default (quantity, min, max) => {
    const numbers = [];
    let randomNumber;
    while(numbers.length < quantity){
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(numbers.indexOf(randomNumber) === -1) numbers.push(randomNumber);
    }

    return numbers.sort((a,b) => a-b);
}