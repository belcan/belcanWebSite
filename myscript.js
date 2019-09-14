var tday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nhour=d.getHours(),nminute=d.getMinutes();

if(nminute<10){
  nminute="0"+nminute;
}
if(nhour<10){
  nhour="0"+nhour;
}

document.getElementById('time').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate +"  &nbsp &nbsp "+nhour+ ":"+nminute ;
      }


window.onload=function(){
GetClock();
setInterval(GetClock,1000);

}
