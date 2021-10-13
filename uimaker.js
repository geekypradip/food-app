let getDetais=(foods)=>{
let viewport=document.createElement('div')
    if(!foods){
        viewport.innerHTML=`<h1>your requested recipi not found!</h1>`;
    // document.querySelector('.container').append(viewport);
    return viewport;
    }
    
    
    for(let food in foods) {
    console.log(food)
    let recipiContainer=document.createElement('div');
    recipiContainer.className='recipiContainer'
    //recipiContainer.style.display="flex";
    var imageContainer=document.createElement('div')
    let recipiImage=document.createElement('img');
    recipiImage.id='img_size'
    recipiImage.src=foods[food].strMealThumb;
    let title=document.createElement('h3');title.className='resheading'
    title.textContent=foods[food].strMeal;
    
    imageContainer.appendChild(title)
    imageContainer.appendChild(recipiImage);
    recipiContainer.appendChild(imageContainer)
    
    var dataContainer=document.createElement('div')
    let foodType=document.createElement('h4')
    foodType.textContent=`FOOD TYPE: ${foods[food].strArea}`
    let foodCatory=document.createElement('h4');
    foodCatory.textContent=`FOOD CATEGORY: ${foods[food].strCategory}`
    dataContainer.appendChild(foodType);dataContainer.appendChild(foodCatory);
    let ingrediant=document.createElement('h4');ingrediant.textContent="ingrediants:"; dataContainer.appendChild(ingrediant);
    
    if(foods[food].strIngredient1!==""&&foods[food].strIngredient1!==null){var item1=document.createElement('p');item1.textContent=`${foods[food].strIngredient1}->${foods[food].strMeasure1}`;dataContainer.appendChild(item1)}
    if(foods[food].strIngredient2!==""&&foods[food].strIngredient2!==null){var item2=document.createElement('p');item2.textContent=`${foods[food].strIngredient2}->${foods[food].strMeasure2}`;dataContainer.appendChild(item2)}
    if(foods[food].strIngredient3!==""&&foods[food].strIngredient3!==null){var item3=document.createElement('p');item3.textContent=`${foods[food].strIngredient3}->${foods[food].strMeasure3}`;dataContainer.appendChild(item3)}
    if(foods[food].strIngredient4!==""&&foods[food].strIngredient4!==null){var item4=document.createElement('p');item4.textContent=`${foods[food].strIngredient4}->${foods[food].strMeasure4}`;dataContainer.appendChild(item4)}
    if(foods[food].strIngredient5!==""&&foods[food].strIngredient5!==null){var item5=document.createElement('p');item5.textContent=`${foods[food].strIngredient5}->${foods[food].strMeasure5}`;dataContainer.appendChild(item5)}
    if(foods[food].strIngredient6!==""&&foods[food].strIngredient6!==null){var item6=document.createElement('p');item6.textContent=`${foods[food].strIngredient6}->${foods[food].strMeasure6}`;dataContainer.appendChild(item6)}
    if(foods[food].strIngredient7!==""&&foods[food].strIngredient7!==null){var item7=document.createElement('p');item7.textContent=`${foods[food].strIngredient7}->${foods[food].strMeasure7}`;dataContainer.appendChild(item7)}
    if(foods[food].strIngredient8!==""&&foods[food].strIngredient8!==null){var item8=document.createElement('p');item8.textContent=`${foods[food].strIngredient8}->${foods[food].strMeasure8}`;dataContainer.appendChild(item8)}
    if(foods[food].strIngredient9!==""&&foods[food].strIngredient9!==null){var item9=document.createElement('p');item9.textContent=`${foods[food].strIngredient9}->${foods[food].strMeasure9}`;dataContainer.appendChild(item9)}
    if(foods[food].strIngredient10!==""&&foods[food].strIngredient10!==null){var item10=document.createElement('p');item10.textContent=`${foods[food].strIngredient10}->${foods[food].strMeasure10}`;dataContainer.appendChild(item10)}
    if(foods[food].strIngredient11!==""&&foods[food].strIngredient11!==null){var item11=document.createElement('p');item11.textContent=`${foods[food].strIngredient11}->${foods[food].strMeasure11}`;dataContainer.appendChild(item11)}
    if(foods[food].strIngredient12!==""&&foods[food].strIngredient12!==null){var item12=document.createElement('p');item12.textContent=`${foods[food].strIngredient12}->${foods[food].strMeasure12}`;dataContainer.appendChild(item12)}
    if(foods[food].strIngredient13!==""&&foods[food].strIngredient13!==null){var item13=document.createElement('p');item13.textContent=`${foods[food].strIngredient13}->${foods[food].strMeasure13}`;dataContainer.appendChild(item13)}
    if(foods[food].strIngredient14!==""&&foods[food].strIngredient14!==null){var item14=document.createElement('p');item14.textContent=`${foods[food].strIngredient14}->${foods[food].strMeasure14}`;dataContainer.appendChild(item14)}
    if(foods[food].strIngredient15!==""&&foods[food].strIngredient15!==null){var item15=document.createElement('p');item15.textContent=`${foods[food].strIngredient15}->${foods[food].strMeasure15}`;dataContainer.appendChild(item15)}
    if(foods[food].strIngredient16!==""&&foods[food].strIngredient16!==null){var item16=document.createElement('p');item16.textContent=`${foods[food].strIngredient16}->${foods[food].strMeasure16}`;dataContainer.appendChild(item16)}
    if(foods[food].strIngredient17!==""&&foods[food].strIngredient17!==null){var item17=document.createElement('p');item17.textContent=`${foods[food].strIngredient17}->${foods[food].strMeasure17}`;dataContainer.appendChild(item17)}
    if(foods[food].strIngredient18!==""&&foods[food].strIngredient18!==null){var item18=document.createElement('p');item18.textContent=`${foods[food].strIngredient18}->${foods[food].strMeasure18}`;dataContainer.appendChild(item18)}
    if(foods[food].strIngredient19!==""&&foods[food].strIngredient19!==null){var item19=document.createElement('p');item19.textContent=`${foods[food].strIngredient19}->${foods[food].strMeasure19}`;dataContainer.appendChild(item19)}
    
    if(foods[food].strIngredient20!==""&&foods[food].strIngredient20!==null){var item20=document.createElement('p');item20.textContent=`${foods[food].strIngredient20}->${foods[food].strMeasure20}`;dataContainer.appendChild(item20)}
    recipiContainer.appendChild(dataContainer)  
    
    
    // for(let i=1;i<=20;i++){
    //     let temp="strIngredient"+i;
    //     console.log(foods[food].);
    // if(foods[food].temp!==""){
    //     let items=document.createElement('h6');
    //     items.textContent=`${i})${foods[food].strIngredient}${i}->${foods[food].strMeasure}${i}`;dataContainer.appendChild(items);
    // }
    // else
    // break;
    // }
    //.......need more
    let instructions=document.createElement('div');
    let insheading=document.createElement('h4');
    insheading.textContent="instruction:";
    let insdata=document.createElement('div');
    insdata.textContent=foods[food].strInstructions;
    let videoLink=document.createElement('h3');
    let a=document.createElement('a');
    a.textContent="watch video tutorial";a.href=foods[food].strYoutube;a.target="_blank";
    videoLink.appendChild(a)
    instructions.appendChild(insheading);instructions.appendChild(insdata);instructions.appendChild(videoLink)
    recipiContainer.appendChild(instructions)  
    
    //final append
    viewport.appendChild(recipiContainer);
    }
    //document.querySelector('.container').append(viewport);
    return viewport;
    }
    export default getDetais;