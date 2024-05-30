function area(len,wid) {
    return len * wid ;
}

const length = 6;
const width = 4 ;
const results = area(length, width) ;
console.log("The area of a rectangle is : " +results);
 
function perimiter (length,width) {
    return 2*(length + width) ;
}
const len = 8 ;
const wid = 5 ;
const perim = perimiter(len,wid);
console.log("the perimeter of the rectangle is: " +perim) ;

