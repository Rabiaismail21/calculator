//******* variables to store calculator elements ********
let theme = document.getElementById("theme");
let btns = document.querySelectorAll(".btn");
let allClear = document.getElementById("all-clear");
let input_screen = document.querySelector(".text");
let eraseNum = document.querySelector(".erase");

//*********** add functionality to theme icon  *************
//***************  light theme  *********************
theme.addEventListener("click", function () {
  if (theme.className == "fa-solid fa-moon") {
    document.body.style.backgroundColor = '#000';
    document.querySelector(".calculator").classList.add("calc-bg");
    input_screen.classList.add("screen-color");
    document.querySelector('.heading').style.color = '#000';
    eraseNum.classList.add('btns-color');
    theme.className = "fa-solid fa-sun";

    btns.forEach(function(all) {
      all.classList.add("btns-color");
    });
  } 
  
//************** dark theme  ******************
  else {
      document.body.style.backgroundColor = '#fff';
    document.querySelector(".calculator").classList.remove("calc-bg");
    btns.forEach(function(all) {
      all.classList.remove("btns-color");
    });
    eraseNum.classList.remove('btns-color');
    input_screen.classList.remove("screen-color");
    document.querySelector('.heading').style.color = '#fff';
    theme.className = "fa-solid fa-moon";
  }
});

//********** add click event to all btns ***********
btns.forEach(function(btnsValue){
  btnsValue.addEventListener('click', function(){
    if(input_screen.value == '0') {
      input_screen.value = '';
      }
    else {
      input_screen.value == '0';
    }
    
    input_screen.value += btnsValue.innerHTML;
  })  
})

//******* add click event to clear input screen ********

allClear.addEventListener('click', () => {
  input_screen.value = '0';
});


//***** add click event to get the result of input screen *****
let solve = document.querySelector(".equal");
solve.addEventListener('click', () => {
  let answer = eval(input_screen.value);
  input_screen.value = answer;
})

// ****** add functionality to erase btn(advance)**********
eraseNum.addEventListener('click', () => {
  input_screen.value = input_screen.value.slice(0, -1);
  if(input_screen.value == ''){
    input_screen.value = '0';
  }
})
