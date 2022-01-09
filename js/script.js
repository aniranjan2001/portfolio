const menu = document.querySelector('.menu');
console.log(menu);
menu.addEventListener('click',function(){
    var  ulMenu = document.querySelector('header>ul');
    if(ulMenu.classList.contains("active")) {
        ulMenu.className= "";
    }    
    else{
        ulMenu.className = "active";
    }

});