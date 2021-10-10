function fetchNavbarHTML(){
        return `<h1>Get Recipe</h1>
        <div>search Recipe By name</div>
        <div>Recipi of the day</div>
        <div>latest Recipe</div>`
    }
    export function fetchNavbarCSS(){
   return `body {
    margin: 0;
  }
  #nav {
    display: flex;
    width: 100%;
    background-color: rgb(21, 3, 37);
    color: #fff;
    font-weight: bold;
     /*position: fixed;*/
    /*overflow: hidden;*/
    border-bottom: 2px solid rgb(80, 76, 76);
    /*padding-bottom: 40px;*/
  }
  #nav > h1 {
    margin: 0;
    padding: 0;
    flex-basis: 40%;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #nav > div {
    flex-basis: 20%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #nav > div:hover {
    background-color: rgb(186, 142, 228);
    color: rgb(20, 2, 37);
    transition: 0.5s;
  }
  `
    }
    export default fetchNavbarHTML;

//Note:you can change the default function name where you are importing,,but non default export function name you can't change during import.