let body=document.querySelector('body')
let dark=document.querySelector('#dark')

dark.onclick=function(){
  if(dark.checked==true){
    body.classList.add('darkMode')
    console.log(1)
  }else{
    body.classList.remove('darkMode')

  }
}