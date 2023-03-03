const express=require("express");
const bodyParser=require("body-parser");

var items=["Buy Food","Drink Water","Excersice"];
var workItems=[];

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today=new Date();
	
	var day=today.toLocaleDateString("en-US", options)
 
	res.render("list",{listTitle:day,newOption:items})

})

	app.post("/",function(req,res){
		
		var item=req.body.newItem;
		
		if(req.body.list=="work"){
			workItems.push(item);
			res.redirect("/work")
		}else{
			items.push(item)
			res.redirect("/")
		}
		
			
			
	

})

app.get("/work",(req,res)=>{
	res.render("list",{listTitle:"work",newOption:workItems})
})

// app.post("/work",(req,res)=>{
// 	var item=req.body.mewItem;
// 	workItems.push(item)
// 	res.redirect("/work")
// })



app.listen(3000,()=>{
	console.log("server has started at port 3000.");
})