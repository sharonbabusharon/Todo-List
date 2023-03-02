const express=require("express");
const bodyParser=require("body-parser");

var items=["Buy Food","Drink Water","Excersice"];

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today=new Date();
	
	var day=today.toLocaleDateString("en-US", options)
 
	res.render("list",{kindOfDay:day,newOption:items})


	app.post("/",function(req,res){
		var item=req.body.newItem;
		items.push(item)
		
		
			res.redirect("/")

		
		
	})
})




app.listen(3000,()=>{
	console.log("server has started at port 3000.");
})