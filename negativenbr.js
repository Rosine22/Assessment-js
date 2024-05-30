function negativeNbr (number) {
    return number.filter(num => num >= 0);
}

const arr = [1,-2,-4,5,7,-9,8] ;
const results = negativeNbr(arr);
console.log(results) ;


function sorting(num) {
    return num.sort() ;
}

const array = [3,4,2,1,9,7,6,8] ;
const sortedArray = sorting(array) ;
console.log(sortedArray)

