function add(numbers) {
    // return numbers === '' ? 0 : parseInt(numbers);
    if(numbers === '') return 0;
    // const numArray = numbers.split(',');
    // return numArray.reduce((sum, num) => sum + parseInt(num), 0);

    const numArray = numbers.split(/[\n,]/);
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = {add};