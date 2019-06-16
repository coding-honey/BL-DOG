
//라우터에서 book 모델을 사용해야 하므로 라우터에 book을 전달한다.
module.exports = function(app,Book){

    //GET ALL BOOKS
    app.get('/api/books',function(req,res){
        Book.find({},function(err,books){
            if(err)
                return res.status(500).send({error:err});
                res.json(books);
        })
    });

    //Get book by author
    app.get('/api/books/author/:author',function(req,res){
        Book.find({author: req.params.author},
            {_id:false,title:true,author:true},function(err,books){
                if(err)
                    return res.status(500).json({error:err});
                if(books.length ===0)
                    return res.status(404).json({error:'book not found'});
                res.json(books);
            })
    });

    //Create book
    app.post('/api/books',function(req,res){
        var book = new Book();
        book.title = req.body.name;
        book.author = req.body.author;
    
        book.save(function(err){
            if(err){
                console.error(err);
                res.json({result:0});
                return;
            }
        })
        res.json({result:1});
    });

    //Delete book
    app.delete('/api/books/:book_id',function(req,res){
        res.end();
    });



    
    
}