function convertstring(inputString) {
    return inputString.toUpperCase();
}

const string1 = "hello world" ;
const result = convertstring(string1);
console.log(result) ;

function filternegative(array) {
    return array.filter(array => array >= 0);
}
const arr = [1, -2 ,3, -8 ,9 ,5] ;
const results = filternegative(arr);
console.log(results);
