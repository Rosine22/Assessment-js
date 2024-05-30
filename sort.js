const somenumbers = [3,4,8,2,1,2,2,6,3,4];
function ascend (num) {
    const sorting = num.sort() ;
    return sorting;
}
const sortedArray = ascend(somenumbers) ;
console.log(sortedArray) ;
const array1 = sortedArray.slice(0,3) ;
console.log(array1);
const array2 = somenumbers.slice(7,10);
console.log(array2);
const array3 = array1.concat(array2) ;
console.log(array3);
