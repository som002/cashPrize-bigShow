//timer promise
const timer =function(sec){
return new Promise(function(resolve){
setTimeout(resolve,1000*sec);
})
}

const startCounter =()=>{
const str_ori = document.querySelector(".cash_value");
/* const str_ori_temp = str_ori.textContent ; */
const setup = () => {
 	const str = str_ori.innerText;
  const num = [];
  
  let digits= [0,1,2,3,4,5,6,7,8,9];
  
  let counter=0;
  
  str_ori.innerText = "";
	Array.from(str).forEach(el=>{
  	if(!isFinite(el)){
    //is a NaN
    	const span = document.createElement("span");
      span.innerText=el;
      str_ori.appendChild(span);
    }else{
    // is a num
    num.push(el);
    const div = document.createElement("div");

    str_ori.appendChild(div);
    div.className="digits";
    counter++;
    for(let c=0;c<counter;c++){
    digits.forEach(elem=>{
    const span = document.createElement("span");
    span.innerText=elem;
    div.appendChild(span);
     //the more the LSB the higher the number of itter for speed scroll.
    })
  }
    
/*     console.log(counter) */
    }
  });
  return num;
}
const number = setup();

//set counter to value;

const digit_counter = document.querySelectorAll(".digits");
 for (let d=0; d < number.length; d++){
timer(0).then(()=>{
digit_counter[d].style.translate = `0rem ${((((d+1)*10)-10) + parseInt(number[d])) * -6.251}rem`;
},0);

} 
}

startCounter();




/* const d = 2;

digit_counter[d].style.translate = `0rem ${((((d+1)*10)-10) + parseInt(number[d])) * -6.25}rem`; */
