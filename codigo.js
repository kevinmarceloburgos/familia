// JavaScript Document

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 0) {
        document.getElementById('h2').style.padding="9px";
    }else {
        document.getElementById('h2').style.padding="18px";
    }
   
});