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
  var category = req.query.category;
  var search = req.query.search;
  var sql;
  var re;
  try {
    if(category && search){    // 검색어 & 카테고리 둘다 있다면  ex) 종로 와인
    console.log('둘다 있음');
    sql = `select * from shop inner join shop_category on shop.shop_id = shop_category.shop_id where category_name="${category}" and shop_addr like '%${search}%';`;
    re = await conn.query(sql);
    console.log(re);
    res.send(re);
  } else if (category) {     // 카테고리만 있다면  ex) 와인
    console.log('카테고리만 있음');
    sql = `select * from shop inner join shop_category on shop.shop_id = shop_category.shop_id where category_name = '${category}';`
    re = await conn.query(sql);
    console.log(re);
    res.send(re);
  } else if (search) {   // 검색어만 있다면  ex) 종로
    console.log('검색어만 있음');
    sql = `select shop.shop_id, shop_name, shop_addr, shop_url, Field, GROUP_CONCAT(' ', category_name) AS category_name, reg_dtm, latitude, longitude, user_id from shop inner join shop_category on shop.shop_id = shop_category.shop_id where shop_addr like '%${search}%' group by shop_id;`;
    re = await conn.query(sql);
    console.log(re);
    res.send(re);
  } else {       // 아무것도 검색 안하면 -> db 값 전체 보여줌
    console.log('전체 다 보여줌');
    sql = `select shop.shop_id, shop_name, shop_addr, shop_url, Field, GROUP_CONCAT(' ', category_name) AS category_name, reg_dtm, latitude, longitude, user_id from shop left outer join shop_category on shop.shop_id = shop_category.shop_id group by shop_id;`;
    re = await conn.query(sql);
    console.log(re);
    res.send(re);
  }    
  } catch (err) { 
    console.error(err);
  }
});

module.exports = router;
