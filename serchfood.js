import getDetais from './uimaker.js';
let showdata=document.createElement('div');
document.getElementById('search').addEventListener('click',()=>{
let food=document.querySelector('input').value;
if(!food){
alert("enter your desire food!!")
return;
}
 //document.querySelector('.container').innerHTML=null;
showdata.innerHTML=`<img id="loading" src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif">`;
document.querySelector('.container').append(showdata);
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
.then((Response)=>{
console.log(Response)
return Response.json();

})

.then((Response)=>{
console.log("ready")
showdata.innerHTML=null;
console.log(Response.meals)
const ui=getDetais(Response.meals);
showdata.append(ui)
})
.catch((err)=>{
console.log(err)
showdata.innerHTML="<h1 id='err'>Connection failed! check your connection and refresh the page</h1>";
document.querySelector('#err').style.color="red"
})

})
