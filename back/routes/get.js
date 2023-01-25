var express = require('express');
var router = express.Router();
var request = require('request');

// Mysql 연동
const mysql = require('promise-mysql');


router.get('/', async function(req, res) {
  const conn = await mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'hyunyy1@',
    database : 'finaldb'
  })

  let sql = `select shop.shop_id, shop_name, shop_addr, shop_url, Field, GROUP_CONCAT(' ', category_name) AS category_name, reg_dtm, latitude, longitude, user_id from shop left outer join shop_category on shop.shop_id = shop_category.shop_id group by shop_id;`;
  let re = await conn.query(sql);
  
  res.send(re);
})

// router.get('/slidetext', async function(req, res) {
//   const conn = await mysql.createConnection({
//     host : '127.0.0.1',
//     user : 'root',
//     password : 'hyunyy1@',
//     database : 'pjdb'
//   })

//   let sql = `select shop.shop_id, shop_name, shop_addr, shop_url, Field, GROUP_CONCAT(' ',category_name) AS category_name, reg_dtm, latitude, longitude, user_id from shop left outer join shop_category on shop.shop_id = shop_category.shop_id group by shop_id order by reg_dtm desc;`;
//   let re = await conn.query(sql);
  
//   res.send(re);
// })





module.exports = router;
