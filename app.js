var express =require("express");
var app=express();
var bodyParser = require("body-parser");
var mongoose   =require("mongoose");
var Post      = require("./models/post")

mongoose.connect("mongodb://localhost/blogpost");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));//to connect the style sheet you have to write this line
//where public is the directory of your style sheets.



//var Post = mongoose.model("Post",blogSchema);

app.get("/",function(req,res){
	res.render("welcome");
});
//for all type of post
app.get("/post",function(req,res){
	Post.find({}, function(err,allBlog){
        if(err){
            console.log("err");
        }
        else{
            res.render("post",{posts:allBlog});
        } 
    });
});
//This protion for calculate the score

app.post("/post", function(req,res){
   var name = req.body.name;
   var age = req.body.age;
   var sex = req.body.sex;
   var body_tmeperature = req.body.body_tmeperature;
   var sym1 =req.body.sym1;
   var sym2 =req.body.sym2;
   var sym3 =req.body.sym3;
    var sym4 =req.body.sym4;
    var sym5 =req.body.sym5;
    var ads1 = req.body.adsym1;
    var ads2 = req.body.adsym2;
    var ads3 = req.body.adsym3;
    var ads4 = req.body.adsym4;
    var ads5 = req.body.adsym5;
    var ads6 = req.body.adsym6;
    var ads7 = req.body.adsym7;
    var ads8 = req.body.adsym8;
    var date = req.body.date;
    var score=0;
    var result='Negative';
    

   var newPost = {name:name, age:age,sex:sex, body_tmeperature: body_tmeperature, sym1:sym1,sym2:sym2,sym3:sym3,sym4:sym4,sym5:sym5,ads1:ads1,ads2:ads2,ads3:ads3,ads4:ads4,ads5:ads5,ads6:ads6,ads7:ads7,ads8:ads8,date:date,score:score,result:result}
   Post.create(newPost, function(err,newlyPost){
    if(err){
        console.log("err");
    }
    else{
        res.redirect("/post");
    }
   });
});

//Tour



//finish the tour router code
//start religion router code

app.get("/post/new", function(req,res){
    res.render("new.ejs");
});

app.get("/post/:id", function(req,res){
  Post.findById(req.params.id, function(err, foundPost){
     if(err){
       console.log("err");
     }
     else{
        res.render("show.ejs",{post: foundPost});
     }
  });
  

});




app.listen(7070, function(){
	console.log("My blog");
})