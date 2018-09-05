var express = require('express');
var router = express.Router();
var multipart = require('parse-multipart'); // Smart Basket
const { parse } = require('querystring');
fs = require('fs');
var {
    Pool,
    Client
} = require('pg');
var format = require('pg-format');
var _ = require('lodash');
var settings = require('../settings');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Pringles Stock'
    });
});
/*router.post('/api/:_racknum', function (req, res, next) { 
    var racknum = req.params['_racknum'];
    var resData = req.body;
    console.log('Recieved Data: ');
    console.log(resData);
    var shelf = "Shelf1";
    var rows = [];
    var values = [];
    array.forEach(element => {
        
    });
    var save_querry = "INSERT INTO pringles(racknum, shelfnum, rownum, distance, date_recorded)" +
        " VALUES( $1, $2, $3, $4, $5 )"
    
});*/
module.exports = router;