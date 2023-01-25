var express = require('express');
var router = express.Router();
var request = require('request');

// Mysql 연동
const mysql = require('promise-mysql');

// 이미지 업로드
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  }
});

var upload = multer({storage: storage});


// db에 넣기
router.post('/', upload.array('file'), async function(req, res) {

  //-----------------현서 DB-----------------
  const conn = await mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'hyunyy1@',
    database : 'finaldb'
  })

  //-----------------찬익님 DB-----------------
  // const conn = await mysql.createConnection({
  //   host : '127.0.0.1',
  //   user : 'root',
  //   password : 'piaoxin123',
  //   database : 'node_project'
  // })
  
  //-----------------종욱 DB-----------------
  // const conn = await mysql.createConnection({
  //   host : 'localhost',
  //   user : 'root',
  //   password : '181015',
  //   database : 'node_project'
  // })

  let sql = `insert into Shop (user_id, shop_name, shop_addr, telno, latitude, longitude, shop_url, Field)
  values (1, "${req.body.place_name}", "${req.body.place_address}", 
  "${req.body.place_phone}", "${req.body.place_x}", "${req.body.place_y}", 
  "${req.body.place_url}", "${req.body.place_text}")`

  let re = await conn.query(sql);  

  // 카테고리 넣기 
  let sql2 = `SELECT LAST_INSERT_ID() AS last_id`;
  let re2 = await conn.query(sql2);
  var getlast_id = re2[0].last_id;

  var chkname = req.body.chk;
  var chkarr = chkname.split(",");
  var len = chkarr.length;

  for(var i = 0; i < len; i++) {
    let sql3 = `insert into Shop_Category (shop_id, category_name) values ("${getlast_id}", "${chkarr[i]}")`
    let re3 = await conn.query(sql3);
  }  
  

  // 이미지 경로 넣기
  var len2 = req.files.length;

  for(var i = 0; i < len2; i++) {
    let sql4 = `insert into Shop_Img (shop_id, user_id, image) values ("${getlast_id}", 1, concat("/images/","${req.files[i].filename}"))`
    let re4 = await conn.query(sql4);
  }
})



module.exports = router;
