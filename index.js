var http=require("http");
var fs=require("fs");
var cheerio=require("cheerio");

//const wz="http://news.baidu.com/"; //网址
const wz = "http://es6.ruanyifeng.com/#docs/async"
var strHtml="";
var results=[];
http.get(wz,function(res){
    res.on("data",function(chunk){
        strHtml+=chunk;
    })
    res.on("end",function(){
    	console.log(strHtml)
        /*var $=cheerio.load(strHtml);
        $("#channel-all li").each((iten,i)=>{
            console.log($(i).text());
        })
*/
    });
})
