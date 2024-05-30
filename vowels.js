function vowelsCount(word) {
let count = 0 ;
let arr = word.split('');
console.log(arr);
for (let i=0 ; i<vowels.length ; i ++) {
    for(let j=0 ; j<arr.length ; j++) {
        if(arr[j] === vowels[i])
        count = 1 ;
    }
}
}

let string = "hello there how are you doing" ;
let vowels = ['a' , 'e' , 'i' , 'o' , 'u'] ;
 vowelsCount(string) ;