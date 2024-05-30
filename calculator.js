function calculator(num1,num2,operator) {
    switch(operator) {
        case '+' :
            return num1 + num2 ;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default :
            return 'Invalid operator';
    }
}

const a = 40 ;
const b = 10 ;
const operation = '/' ;
const results = calculator(a,b,operation) ;
console.log(results);

function week(day) {
    switch(day) {
        case 1:
            return 'Monday' ;
        case 2:
            return 'Tuesday' ;
        case 3:
            return 'Wednessday' ;
        case 4:
            return 'Thursday' ;
        case 5:
            return 'Friday' ;
        case 6:
            return 'Saturday' ;
        case 7:
            return 'Sunday' ;
        default:
            return 'Invalid day' ;                    
    }
}

const days = 6 ;
const dayofweek = week(days) ;
console.log(dayofweek) ;