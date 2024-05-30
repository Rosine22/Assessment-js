
function sum (num1,num2) {
    return num1 + num2 ;
}
 const add = sum(8,4);
 console.log(add) ;

function product(a,b) {
    return a * b ;
}

const multiply = product (3,5) ;
console.log(multiply) ;


function substract( b,c) {
    return b - c ;
}
const difference = substract(10,5) ;
console.log(difference) ;


function divide(num1 , num2) {
    return num1 / num2 ;
}
 const division = divide (12,6) ;
 console.log(division) ;
 
function filtering(arr) {
    return arr.filter(arr => arr > 10)
    }

const arrys = [20,1,2,3,23,50,12,16,4] ;
console.log(filtering(arrys)) ;
