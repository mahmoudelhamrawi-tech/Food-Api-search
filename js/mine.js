

let app_id ='3cec3356';
let app_key='3ed25e03376206d3f4e52cff5f5b6886';
var txt;
var data=[];
var allDate;
let searchform = document.getElementById("search_form");
let searchtxt = document.getElementById("inp-form");
let mybtn = document.getElementById("mybtn");
let load = document.getElementById("load");



mybtn.addEventListener("click",function(e){
     txt = searchtxt.value;
    getDate();
})

function getDate()
{
    let req = new XMLHttpRequest();
    var myurl= `https://api.edamam.com/search?q=${txt}&app_id=${app_id}&app_key=${app_key}`;

    req.open("Get",myurl);
    req.onreadystatechange=function(){

           if(req.readyState==2){
          load.classList.remove("d-none")
           }else if(req.readyState==4)
           {
            let data=JSON.parse(req.response);
            allDate = data.hits; 
           see();
           }
    }
    req.send();
}



function see(){
 let temp='';
 for(var i=0;i<allDate.length;i++)
 {
     temp +=` <div class="col-md-4">
     <div class="card my-5">
     <img src=`+allDate[i].recipe.image+` alt="food" class="img-fluid">
     <div class="card-body">
         <h6 class="card-body-title">Item :`+allDate[i].recipe.label+`</h6>
         <span class="card-body-desc">Calories :`+Math.round(allDate[i].recipe.calories)+`</span>
     </div>
     </div>
 </div>`
 }

 document.getElementById("dis").innerHTML=temp;
 load.classList.add("d-none")

}

