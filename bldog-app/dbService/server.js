const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("mongodb");

const CONNECTION_URL = "mongodb+srv://dbUser:7129@cluster0-fzuwe.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "bldog";
const c_shelterUser = "shelterUser";
const c_business = "business";
const c_shelterInformation = "shelterInformation";

//server port 설정
var port = process.env.PORT || 8080;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(port, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection(c_shelterUser);
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

//직원 정보 업뎃 (함수이름 바꾸기. 한 직원정보 가져오는것이므)
//정보 업뎃 (함수이름 바꾸기. 한 직원정보 가져오는것이므로 getBusiness로)
//모든 보호소 컬렉션 가져오기
app.get("/user", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//모든 직원 컬렉션 가져오기
app.get("/business", (request, response) => {
    collection = database.collection(c_business);

    //   //일단 요청으로 넘어온 객체 확인하기
    //   console.log("request :"+request);
    //   console.log("request body :"+request.body);
    //   console.log("request.params.id :"+request.params.id);

    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//한 직원 컬렉션 가져오기
app.get("/business/:id", (request, response) => {
    collection = database.collection(c_business);

      //일단 요청으로 넘어온 객체 확인하기
      console.log("request :"+request);
      console.log("request body :"+request.body);
      console.log("request.params.id :"+request.params.id);

    // collection.findOne({}).toArray((error, result) => {
    //     if(error) {
    //         return response.status(500).send(error);
    //     }
    //     response.send(result);
    // });

    collection.findOne({_id: new mongodb.ObjectID(request.params.id)}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


//새 직원 컬렉션 추가. 나중에 put으로 바꾸기
app.post("/business/add", (request, response) => {
    collection = database.collection(c_business);

    //일단 요청으로 넘어온 객체 확인하기
    console.log("request :"+request); 
    console.log("request body :"+request.body);

    //db에 넘어온 obj 객체 저장하기.
    collection.insertOne(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//직원 데이터 수정하기 나중에 put으로 변경
app.post("/business/update/:id", (request, response) => {
    collection = database.collection(c_business);

    //일단 요청으로 넘어온 객체 확인하기
    console.log("request :"+request); //[object Object] 로 뜸
    console.log("request body :"+request.body);
    // console.log("req bddy params : "+request.body.params("person_name"));
    console.log("req body.person_name : "+request.body.person_name);
    console.log("request.body.business_gst_email : "+request.body.business_gst_email);


    //db에 정보 수정하기. 객체를 저장해야하나?
    collection.updateOne(
        {_id: new mongodb.ObjectID(request.params.id)},
        {$set: {
            "person_name" : request.body.person_name,
            "business_name" : request.body.business_name,
            "business_gst_duty" : request.body.business_gst_duty,
            "business_gst_number" : request.body.business_gst_number,
            "business_gst_email": request.body.business_gst_email,
            "business_gst_date": request.body.business_gst_date
        }},
         (error, result)=>{
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//await db.collection('inventory').deleteOne({ status: 'D' });
//직원 데이터 삭제하기
app.delete("/business/delete/:id", (request, response) => {
    collection = database.collection(c_business);

    //일단 요청으로 넘어온 객체 확인하기
    console.log("request :"+request); //[object Object] 로 뜸
    console.log("request body :"+request.body);
    console.log("request.params.id :"+request.params.id); //id 값만 뜸

    collection.deleteOne({_id: new mongodb.ObjectID(request.params.id)}, (error, result)=>{
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});



//필요한 로직

//로그인 id,ps 정보 db에 넘겨서 shelterId 값 리턴받기

//business/:shelterId 넘겨서 해당 shelterId의 직원들 데려오기 



//보호소정보 가져오기 : shelterInformation/:shelterId 넘겨서 해당 shelter의 정보 가져오기
//보호소정보 업뎃 : update shelterInformation/:shelterID 
//직원 정보 추가 : insert business/:shelterID 
//직원 정보 업뎃 : update business/:shelterID 
//직원 정보 삭제 : delete business/:shelterID/person_name


//한 보호소 컬렉션 가져오기
app.get("/shelterInformation/:shelterId", (request, response) => {
    collection = database.collection(c_shelterInformation);

      //일단 요청으로 넘어온 객체 확인하기
      console.log("request :"+request);
      console.log("request body :"+request.body);
      console.log("request.params.shelterId :"+request.params.shelterId); //req로 날라온 url의 id

    collection.findOne({shelterId: request.params.shelterId}, (error, result) => { 
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//보호소 정보 수정하기
app.put("/shelterInformation/:shelterId", (request, response) => {
    collection = database.collection(c_shelterInformation);

    // console.log("req bddy params : "+request.body.params("person_name"));
    console.log("req body.shelterId : "+request.body.shelterId);

    //db에 정보 수정하기. 객체를 저장해야하나?
    collection.updateOne(
        {shelterId: request.params.shelterId},
        {$set: {
            "address" : request.body.address,
            "specified_date" : request.body.specified_date,
            "open_time_weekday" : request.body.open_time_weekday,
            "close_time_weekday" : request.body.close_time_weekday,
            "vet_number" : request.body.vet_number,
            "staff_number": request.body.staff_number,
            "clinic_room": request.body.clinic_room,
            "breeding_room" : request.body.breeding_room,
            "max_animal_number" :request.body.max_animal_number
        }},
         (error, result)=>{
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});







