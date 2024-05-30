const { categories } = require('./db.js');

var data = require('../database/db.js') ;

function add(item) {
    data.push(item);
    return data ;
}

function getAll() {
return data ;
}

function getById(id) {
    return data.find(item => item.id === id);
}

function deleteById(id) {
data=data.filter(item =>item.id === id);
return data;
}

module.exports = {
    add,
    getAll,
    getById,
    deleteById
  }