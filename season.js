function seasons(month) {
    switch (month) {
        case ('September', 'October', 'November') :
            return 'Spring';
        case ( 'December', 'January', 'February') :
            return 'Summer' ;
        case ('March', 'April', 'May'):
            return 'Fall' ;
        case ('June', 'July', 'August'):
            return 'Winter';
        default:
            return 'Invalid month';                
    }
}

function sumofArray(arr) {
    let sum = 0;
    for(let i=0 ; i<arr.length ; i++) {
        sum += arr[i] ;
    }
    return sum;
}

const array = [1,2,3,4,5,6,7] ;
const results = sumofArray(array) ;
console.log(results) ;


function reverse(arr) {
    return arr.reverse() ;
}
const arrays = [1,2,3,4,5,6,7,8,9,10] ;
console.log(reverse(arrays)) ;

function Maxnumber (arr) {
    return Math.max(...arr) ;
}

const arr = [1,2,3,4,5,6,7,8,9,10] ;
console.log(Maxnumber(arr)) ;

function Minnumber (arr) {
    return Math.min(...arr) ;
}

const arry = [1,2,4,5,3,6,7,8,9,10] ;
console.log(Minnumber(arry));

