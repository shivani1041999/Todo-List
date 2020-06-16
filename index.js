const express = require('express');
const path = require('path');
const port = 3000;
// import database
const db = require('./config/mongoose');
// import model
const Todotask = require('./models/contact');

const app = express();
// setup ejs as view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
// middleware
app.use(express.urlencoded({extended : true}));
app.use(express.static('assests'));

app.post('/add-task',function(req,res){
    console.log(req.body);
    Todotask.create({
        desc : req.body.desc[0],
        category: req.body.category,
        date: req.body.desc[1]
    },function(err,newTask){
        if(err){
            console.log('Error in Creating a new task',err);
            return;
        }

        console.log('******',newTask);
        return res.redirect('back');
    });
});
app.post('/delete-todolist',function(req,res){   
    var completeTask = req.body.check;
    if(Array.isArray(completeTask) == false){
        
        Todotask.findByIdAndDelete(completeTask, function(err){
            if(err){
                console.log("Error in deleting from database");
                return;
            }
        return res.redirect('back');
        });
    }else if(Array.isArray(completeTask)){
        for(let i = 0; i < completeTask.length; i++){
            Todotask.findByIdAndDelete(completeTask[i],function(err){
                if(err){
                    console.log("Error in deleting from database");
                    return;
                }
            
            });
        }
        return res.redirect('back');
    }
       
    
});
app.get('/',function(req,res){
    console.log(__dirname);
    Todotask.find({},function(err, todolist){
        if(err){
            console.log('Error in fetching the database');
            return;
        }
        return res.render('home',{
            title : "TODO APP",
            todo_list: todolist
        });
    });
    
});



app.listen(port,function(err){
    if(err){
        console.log("Error in running the Server",err);
        return;
    }
    console.log('Server is up and running on port',port);
});