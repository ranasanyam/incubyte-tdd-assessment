function add(numbers) {
    // return numbers === '' ? 0 : parseInt(numbers);
    if(numbers === '') return 0;
    // const numArray = numbers.split(',');
    // return numArray.reduce((sum, num) => sum + parseInt(num), 0);

    // const numArray = numbers.split(/[\n,]/);
    // return numArray.reduce((sum, num) => sum + parseInt(num), 0);


    let delimiter = /[\n,]/;
    if(numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(`[${parts[0][2]}]`);
        numbers = parts[1];
    }
    // const numArray = numbers.split(delimiter);
    // return numArray.reduce((sum, num) => sum + parseInt(num), 0);
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);
    if(negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = {add};