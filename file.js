const percent = document.querySelector('.percent');
const container = document.querySelector('.container');

var parval=0;

const  increamment=setInterval(()=>{
parval++;
percent.textContent=`${parval}`;
if(parval==100){
    clearInterval(increamment);
    container.classList.remove('active')
}
},100)