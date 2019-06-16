
//Schema 만들기.
//document의 구조가 어떻게 생겼는지 알려주는 역할
var mongoose = require('mongoose');
var Schema = mongoose.Schema; //몽구스에서 기능 가져오기

var bookSchema = new Schema({
    title: String,
    author: String
});
//첫번째 인자는 이름지정. 다른파일에서 boo모델 사용 가능. 
//두번째 파라미터는 객체 등록
module.exports = mongoose.model('book',bookSchema);