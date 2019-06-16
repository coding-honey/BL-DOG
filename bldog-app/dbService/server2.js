const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://dbUser:7129@cluster0-fzuwe.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "bldog";
const c_shelterUser = "shelterUser";
const c_business = "business";

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



//데이터 가져오기
app.get("/user", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//데이터 가져오기
app.get("/business", (request, response) => {
    collection = database.collection(c_business);
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


//데이터 삽입
app.post("/user", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});