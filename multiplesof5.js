function multiples () {
    for(let i=5 ; i<=100 ; i += 5) {
        console.log(i) ;
    }
}

multiples() ;

function squareroot(num) {
    const root = Math.sqrt(num) ;
    return root ;
}

squareroot() ;
const number = 49 ;
const results = squareroot(number);
console.log('the squareroot is : ' +results);
