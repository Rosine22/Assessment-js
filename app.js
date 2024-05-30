const dataControllers = require('../controllers/operations.js') ;
var altData = dataControllers.getAll() ;
let newItem = {
    id:3 ,
    name: 'item3'
}
var addData = dataControllers.add(newItem);
console.log(addData);