function Evennbr (num) {
    if(num %  2 === 0) {
        return 'This is an even number' ;
    }
    else {
        return 'This is an odd number' ;

    }
}
Evennbr()
const nbrs = 33 ;
const result = Evennbr(nbrs) ;
console.log(result) ;

function Oddnbr (num) {
    if(num %  2 !== 0) {
        return 'This is an Odd number' ;
    }
    else {
        return 'This is an Even number' ;

    }
}
Oddnbr() ;
const nbr = 36 ;
const results = Oddnbr(nbr) ;
console.log(results) ;