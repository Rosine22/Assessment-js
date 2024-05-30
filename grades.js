function gradecalculator (score) {
    let grade ;
    switch(true) {
        case score >= 90 :
             grade = 'A' ;
        case score >= 80:
             grade = 'B' ;
        case score >=70:
            grade = 'C' ;
        case score >= 60:
            grade = 'D' ;
        case score >= 50:
            grade = 'E'  ;
        default:
            grade = 'F';                
    }
    return grade;
}
const studentScore = 90 ;
console.log(gradecalculator(studentScore)) ;

