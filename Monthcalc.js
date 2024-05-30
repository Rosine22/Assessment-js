function monthoftheyear(month) {
    switch(month) {
        case 1:
            return 'January' ;
        case 2:
            return 'February' ;
        case 3:
            return 'March' ;
        case 4:
            return 'April' ;
        case 5:
            return 'May' ;
        case 6:
            return 'June' ;
        case 7:
            return 'Jully' ;
        case 8:
            return 'August' ;
        case 9:
            return 'September' ;
        case 10:
            return 'October' ;
        case 11:
            return 'November' ;
        case 12:
            return 'December' ;
        default:
            return 'Invalid Month' ;                                              
    }
}
const months = 5;
const result = monthoftheyear(months);
console.log(result);


function trafficlight(color) {
    switch(color) {
        case 1:
            return 'Red' ;
        case 2:
            return 'Yellow' ;
        case 3:
            return 'Green' ;
        default:
            return 'Invalid number' ;                   
    }
}

const num = 3 ;
const results = trafficlight(num);
console.log(results) ;
