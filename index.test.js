const {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose
  } = require('./index');

test('should capitalize the first letter of a string', () => { 
    expect(capitalize('good')).toBe('Good');
    // expect(capitalize('this is a good boy')).toBe('This Is A Good Boy');
 })

test('should reverse a string', () => {
    expect(reverse('hi')).toBe('ih');
    expect(reverse('hello world')).toBe('dlrow olleh');
})

test('should checks if a string is a palindrome', () => {
    expect(isPalindrome('eat')).toBe(false);
    expect(isPalindrome('madam')).toBe(true); // didn't pass test
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('refer')).toBe(true);
})

test('should count the number of words in a string', () => {
    expect(wordCount('I like the view')).toBe(4);
    expect(wordCount('bro')).toBe(1);
    expect(wordCount('welcome to the new world')).toBe(5);
})

test('should double every number in the array', () => {
    expect(double([1,2,3,4])).toStrictEqual([2, 4, 6, 8]);
    expect(double([3,0])).toStrictEqual([6, 0]);
    expect(double([-2])).toStrictEqual([-4]);
})

test('should filter out even numbers from an array', () => {
    expect(filterEven([1,2,4,3,8,10])).toStrictEqual([2,4,8,10]);
    expect(filterEven([1,3])).toStrictEqual([]);
    expect(filterEven([12])).toStrictEqual([12]);
})

test('should calculate the sum of all numbers in an array', () => {
    expect(sum([1,3,4,2])).toStrictEqual(10);
    expect(sum([0, 0, 0])).toStrictEqual(0);
})

test('should calculate the average of all numbers in an array', () => {
    expect(average([1,3,4,2])).toStrictEqual(2.5);
    expect(average([0, 0, 0])).toStrictEqual(0);
    expect(average([-10, 10, -10, 10])).toStrictEqual(0);
})


test('should return the full name of a person object', () => {
    expect(fullName({firstName: 'James', lastName: 'Obeng'})).toStrictEqual('James Obeng')
})

test('should check if a person is 18 or older', () => {
    expect(isAdult({age: 5})).toStrictEqual(false);
    expect(isAdult({age: 18})).toStrictEqual(true);
    expect(isAdult({age: 38})).toStrictEqual(true);
})

test('should filter out and keep person with a min age of specified', () => {
    const arr = [
        {name: 'Kewa', age: 32},
        {name: 'Blay', age: 16},
        {name: 'Jane', age: 22},
        {name: 'Samuel', age: 13},
    ]
    expect(filterByAge(arr, 30)).toStrictEqual([{name: 'Kewa', age: 32}])
    expect(filterByAge(arr)).toStrictEqual([{name: 'Kewa', age: 32}, {name: 'Jane', age:22}])
    expect(filterByAge(arr, 12)).toStrictEqual(
        [
            {name: 'Kewa', age: 32},
            {name: 'Blay', age: 16},
            {name: 'Jane', age: 22},
            {name: 'Samuel', age: 13}, 
        ]
    )
})


test('should combine multiple functions and return the results from the two functions used', () => {

    const reverseAndCapitalize = compose(capitalize, reverse);
    const filterEvenNumbersAndDouble = compose(double, filterEven);
    
    expect(reverseAndCapitalize('gracias')).toStrictEqual('Saicarg');
    expect(filterEvenNumbersAndDouble([1,2,3,8])).toStrictEqual([4, 16]);
})