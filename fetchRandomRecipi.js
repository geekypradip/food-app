let showdata=document.createElement('div');
import getDetais from './uimaker.js';
showdata.innerHTML=`<img id="loading" src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif">`;
showdata.style.textAlign="center";
document.querySelector('.container').append(showdata);
document.querySelector('#loading').style.width="200px";
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then((Response)=>{
    console.log(Response)
    //alert(Response.status)
    return Response.json();
})
.then((Response)=>{
    console.log(Response)
    showdata.style.textAlign="left"
    showdata.innerHTML=null;
    console.log(Response.meals);
    let ui=getDetais(Response.meals);
    showdata.appendChild(ui)
})
.catch((e)=>{
    console.log(e);
   // alert(e)
    showdata.innerHTML="<h1 id='err'>Connection failed! check your connection</h1>";
    document.querySelector('#err').style.color="red";
    setInterval(()=>window.location.href="recipi_of_the_day.html",3000)
})