//패키지 로드하기
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoose 이용해 mongodb server에 연결
var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    //mongodb server에 연결된 경우
    console.log("conneced to mongodb Server");
});


//atlas mongodb driver 예제
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:<password>@cluster0-fzuwe.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


//se.connect('mongodb://admin:1234@localhost:27017/test',{useNewUrlParser: true});
mongoose.connect('mongodb://admin:1234@localhost:27017/test?authSource=admin',{useNewUrlParser: true});

//모델 정의하기.
//model 은 db에서 데이터 읽기,생성,수정하는 프로그래밍 인터페이스를 정의한다.
//첫번째 인자 book은 해당 document가 사용할 collection(테이블)의 단수 표현. 
//자동으로 복수형태로 변환해 collection이름으로 사용한다.
var Book = require('./models/book');


//바디파서 이용하기 위한 앱설정
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//기본 프로미스를 노드프로미스로 교체함
// mongoose.Promise = global.Promise;
// mongoose.connect(precess.env.MONGO_DB,{useMongoClient: true});

//server port 설정
var port = process.env.PORT || 8080;

//router 설정 
var router = require('./routes')(app,Book); 

//server 실행 
var server = app.listen(port,function(){
    console.log("express server has started on port"+port)
});





