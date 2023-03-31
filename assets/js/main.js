window.onload = function(){
    document.querySelector('header .hamburger').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.hamburger_menu').classList.toggle('show')
    })
    document.querySelector('.hamburger_menu .close').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.hamburger_menu').classList.remove('show')
    })
}