const express=require("express");
const bodyParser=require("body-parser");
const Date=require(__dirname +"/date.js")

let items=["Buy Food","Drink Water","Excersice"];
let workItems=[];

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	
	let day=Date.getDate()
 
	res.render("list",{listTitle:day,newOption:items})

})

	app.post("/",function(req,res){
		
		let item=req.body.newItem;
		
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

app.get("/about",(req,res)=>{
	res.render("about");
})

// app.post("/work",(req,res)=>{
// 	let item=req.body.mewItem;
// 	workItems.push(item)
// 	res.redirect("/work")
// })



app.listen(3000,()=>{
	console.log("server has started at port 3000.");
})