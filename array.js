const arr = [1,2,3,4,5,6,7] ;
 function sumofarray (arr) {
    return arr.reduce((sum, current) => sum + current, 0);
 }

 const results = sumofarray(arr) ;
 console.log(results) ;

function findMax (array) {
 if(arr.length === 0 ) {
    return undefined ;
 }
 else {
    return Math.max(...arr) ;
 }
}
findMax() ;
const max = findMax(arr) ;
console.log("The gretest value in an array is :" +max) ;

function findMin (array) {
    if(arr.length == 0) {
        return undefined ;
    }
    else {
        return Math.min(...arr) ;
    }
}
 findMin() ;
 const min= findMin(arr) ;
 console.log("the smallest value in the array is:" +min) ;

function Average(array)  {
    if(arr.length === 0) {
        return undefined ;
    }
    else {
        const sum = arr.reduce((sum,current) => sum + current , 0) ;
        const ave = sum / arr.length ;
        return ave ;
    }
}
Average() ;
const average = Average(arr) ;
console.log("the average is : " + average) ;

const arrange = ['a', 'b' , 'c' , 'd'] ;
const arrayto = ['e' , 'f' , 'g'] ;

function combi (arrange , arrayto) {
    const arrays = arrange.concat(arrayto) ;
    return arrays;
}

const combinedArray = combi(arrange , arrayto);
console.log(combinedArray) ;
