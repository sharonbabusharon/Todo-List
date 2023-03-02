const express=require("express");
const bodyParser=require("body-parser");


const app=express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today=new Date();
	
	var day=today.toLocaleDateString("en-US", options)
 
	res.render("list",{kindOfDay:day})

})

app.post("/",function(res,req){
	
})


app.listen(3000,()=>{
	console.log("server has started at port 3000.");
})