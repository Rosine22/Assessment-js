function average(arr) {
   const sum = arr.reduce((total,sum) => total + sum , 0) ;
   const averages = sum / arr.length ;
    return averages ;
}

const array = [20,30,10,50] ;
console.log(average(array));

function Evenelements(arr) {
    return arr.filter (arr => arr %2 === 0) ;
}

const arr = [1,2,3,4,5,6,7,8,9,10] ;
console.log(Evenelements(arr)) ;

function sumofArray (arr) {
    return arr.reduce((total,sum) => total + sum , 0) ;
}

const arry = [1,2,3,4,5,6,7,8,9,10] ;
console.log(sumofArray(arry)) ;

