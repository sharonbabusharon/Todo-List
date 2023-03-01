const express=require("express");
const bodyParser=require("body-parser");

const app=express();


app.get("/",(req,res)=>{

	var today=new Date();

	if(today.getDay()===3||today.getDay()===0){
		res.send("weekends")
	}else{
		res.send("oops")
	}

})


app.listen(3000,()=>{
	console.log("server has started at port 3000.");
})