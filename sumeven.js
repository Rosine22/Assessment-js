function sumofEvenNumbers(arr) {
    return arr.reduce((sum,num) => (num%2 === 0) ? sum + num : sum ,0) ;
}
const array = [1,2,3,4,5,6,7,8.9,10] ;
const results = sumofEvenNumbers(array);
console.log(results) ;
