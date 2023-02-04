const express = require("express");
const app = express();
const http = require("http").createServer(app);
var crypto = require("crypto"); //hash(sha512) 암호화
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const GeneralMysql = require("mysql");     //일반 mysql 쓸경우 
// Mysql 연동
const mysql = require('promise-mysql');    //promise-mysql 쓸경우

const bodyParser = require("body-parser");
var request = require("request");
const router = express.Router();
const cors = require("cors");
const path = require("path");
var list = require("./routes/list");
var add = require("./routes/add");
var search = require('./routes/search');


app.use(
  cors({
    origin: ["http://localhost:3000"], //session 인증 react
    credentials: true, //session 인증 react axios
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: false, //session을 쿠키에 다시 저장안함
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
    store: new MySQLStore({
      //FileStore 객체 생성
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "hyunyy1@",
      database: "finaldb",
      checkExpirationInterval: 1000 * 60 * 60, //세션 만료기간 확인 설정
      expiration: 1000 * 60 * 60, //세션 만료기간 설정
    }),
  })
);
const Generalconn =  GeneralMysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "hyunyy1@",
  database: "finaldb",
  multipleStatements: true, // 다중쿼리
});

//signup
app.post("/signup", function (req, res) {
  console.log("이메일:" + req.body.email);
  console.log("닉네임:" + req.body.nickname);
  console.log("비번:" + req.body.pw);
  console.log("비번확인:" + req.body.pwConfirm);
  console.log("전화번호:" + req.body.phonenumber);

  var findStr = "@";

  var email = req.body.email;
  var nickname = req.body.nickname;
  var phonenumber = req.body.phonenumber;
  var pw = req.body.pw;
  var pwConfirm = req.body.pwConfirm;

  if (pwConfirm != pw) {
    res.send("비밀번호 다시 확인해주세요");
  } else if (
    email === "" ||
    nickname === "" ||
    phonenumber === "" ||
    pw === "" ||
    pwConfirm === ""
  ) {
    res.send("공백값");
  } else if (email.indexOf(findStr) == -1) {
    res.send("이메일@포함여부");
    console.log("이메일 @:" + email.indexOf(findStr));
  } else {
    const hashPassword = crypto.createHash("sha512").update(pw).digest("hex"); //
    var query = "SELECT user_email FROM user where user_email='" + email + "';"; // 중복 처리하기위한 쿼리
    Generalconn.query(query, function (err, rows) {
      if (rows.length == 0) {
        // sql 제대로 연결되고 중복이 없는 경우
        var sql = {
          user_email: email,
          user_nickname: nickname,
          user_password: hashPassword,
          user_phonenumber: phonenumber,
        };
        // create query
        var query = Generalconn.query(
          "insert into user set ?",
          sql,
          function (err, rows) {
            if (err) throw err;
            else {
              res.send("가입성공");
            }
          }
        );
      } else {
        // 이미 있음
        res.send("중복ID");
      }
    });
  }
});

//login
app.post("/login", function (req, res) {
  var email = req.body.email;
  var pw = req.body.pw;

  console.log(email);
  console.log(pw);

  // var query = "select user_id,user_password, user_email from user where user_email='" + email + "';"
  var query = "select * from USER where user_email='" + email + "';";
  console.log(query);
  Generalconn.query(query, function (err, rows) {
    if (err) throw err;
    else {
      if (rows.length == 0) {
        // 아이디가 존재하지 않는 경우
        console.log("아이디 틀림");
        res.send("아이디틀림");
        //res.redirect("/login")
      } else {
        var password = rows[0].user_password;
        const hashPassword = crypto
          .createHash("sha512")
          .update(pw)
          .digest("hex"); //createHash('사용할 암호화 알고리즘').update('변환할 값').digest('인코딩');
        console.log(hashPassword);
        console.log(password);

        if (password == hashPassword) {
          //로그인 성공
          console.log("로그인 성공");

          req.session.user_id = rows[0].user_id;
          var localnickname = rows[0].user_nickname;
          console.log("로그인세션아이디:" + req.session.user_id);

          res.send("로그인성공," + localnickname);
          console.log("로그인성공," + localnickname);
        } else {
          //로그인 실패 (아이디는 존재하지만 비밀번호가 다름)
          console.log("로그인 실패 비밀번호 틀림");
          res.send("버번틀림");
        }
      }
    }
  });
});


//mypageinfo
app.get("/mypageInfo", function (req, res) {
  console.log("마이페이지세션아이디 :" + req.session.user_id);

  //on
  // var query  = "select * from USER  where user_email ='" + req.session.user_email + "';"
  // var Reviewquery  = "select * from USER left join SHOP ON USER.user_id = SHOP.user_id where user_id ='" +req.session.user_id + "';"  //on
  //var Commentquery  = "select * from USER  left join COMMENT ON USER.user_id = COMMENT.user_id left join SHOP ON COMMENT.user_id = SHOP.user_id and COMMENT.shop_id = SHOP.shop_id where user_id = '" +req.session.user_id + "';"  //on
  // var Cartquery  = "select * from USER left join CART ON USER.user_id = CART.user_id left join SHOP ON CART.shop_id = SHOP.shop_id  where user_id =  '" + req.session.user_id + "';" //on

  //using
  var Mypagequery =
    "select * from USER  where user_id ='" + req.session.user_id + "';";
  var Reviewquery =
    "select * from USER left join SHOP USING(user_id) where user_id ='" +
    req.session.user_id +
    "';"; //using
  var Commentquery =
    "select * from USER left join COMMENT using (user_id) left join SHOP using (user_id, shop_id)  where user_id  = '" +
    req.session.user_id +
    "';"; //using
  var Cartquery =
    "select distinct* from USER left join CART using (user_id) left join SHOP using (user_id,shop_id) where user_id =  '" +
    req.session.user_id +
    "';"; //using

  //var Cartquery  = "select * from User left join CART using(user_id) left join SHOP using(user_id,shop_id) where user_email = '" + req.session.user_email + "';"  //using

  Generalconn.query(Mypagequery, function (MypageErr, myPagerows, fields) {
    Generalconn.query(Reviewquery, function (MyReviewErr, myReviewrows, fields) {
      Generalconn.query(Commentquery, function (MyCommentErr, myCommentrows, fields) {
        Generalconn.query(Cartquery, function (MyCartErr, myCartrows, fields) {
          if (MypageErr || MyReviewErr || MyCommentErr || MyCartErr) {
            console.log(MypageErr);
            console.log(MyReviewErr);
            console.log(MyCommentErr);
            console.log(MyCartErr);
          } else {
            console.log("내정보 sql:" + Mypagequery);
            console.log("내 리뷰 sql:" + Reviewquery);
            console.log("내 리뷰 sql:" + Commentquery);
            console.log("내 리뷰 sql:" + Cartquery);

            for (var i = 0; i < myPagerows.length; i++) {
              console.log(
                "내 정보:" + myPagerows[i].user_id,
                myPagerows[i].user_email,
                myPagerows[i].user_name,
                myPagerows[i].user_nickname,
                myPagerows[i].user_phonenumber,
                myPagerows[i].user_imageaddr
              );
            }

            for (var i = 0; i < myReviewrows.length; i++) {
              console.log(
                "내 리뷰:" + myReviewrows[i].shop_id,
                myReviewrows[i].user_id,
                myReviewrows[i].shop_name,
                myReviewrows[i].Field,
                myReviewrows[i].reg_dtm,
                myReviewrows[i].shop_addr
              );
            }
            for (var i = 0; i < myCommentrows.length; i++) {
              console.log(
                "내가 쓴 댓글:" + myCommentrows[i].user_id,
                myCommentrows[i].comment_idx,
                myCommentrows[i].user_email,
                myCommentrows[i].shop_name,
                myCommentrows[i].contents,
                myCommentrows[i].reg_dtm,
                myCommentrows[i].score
              );
            }
            for (var i = 0; i < myCartrows.length; i++) {
              console.log(
                "내가 찜한 곳:" + myCartrows[i].user_id,
                myCartrows[i].user_email,
                myCartrows[i].shop_name,
                myCartrows[i].reg_dtm
              );
            }

            res.send({
              mypageInfo: myPagerows,
              mypageReview: myReviewrows,
              mypageComment: myCommentrows,
              mypageCart: myCartrows,
            });
          }
        });
      });
    });
  });
});

//session check 
app.get("/login/sessionCheck", function (req, res) {
  if (req.session.user_id == undefined) {
    console.log("세션아이디" + req.session.user_id);
    res.send("세션없음");
  } else {
    console.log("세션아이디:" + req.session.user_id);
    res.send("세션있음");
  }
});


//logout
app.get('/logout',function(req, res) {
    
  //세션 아이디
  console.log('삭제할 세션아이디:' + req.session.user_id);
  delete req.session.user_id;
  console.log('삭제완료한 세션아이디:' + req.session.user_id);
  res.send('로그아웃완료');
  
});



app.use("/list", list);
app.use("/add", add);
app.use('/search', search)

app.listen(8080, function () {
  console.log("listening on 8080");
});
