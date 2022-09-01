const express=require('express');
const app=express();
const port=80;
app.set('view engine', 'ejs');
app.use(express.static('static'));
// ref profolio:  https://p.w3layouts.com/demos/sep-2016/15-09-2016/preface/web/#
app.get('/protfolio',(req,res)=>{
    res.render('index')
})
app.listen(port,(req,res)=>{
    console.log("Server is running at the "+port);
})