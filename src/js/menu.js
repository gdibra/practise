window.onscroll = function() {myFunction()};

function myFunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height);
    if(scrolled < 0.2) {
        let navbar = document.getElementById("navbar");
        navbar.style.opacity = 0;
        navbar.classList.remove('fade-in');
        navbar.classList.add('fade-out');
    } else {
        let navbar = document.getElementById("navbar");
        navbar.style.opacity = 0.8;
        navbar.classList.remove('fade-out');
        navbar.classList.add('fade-in');
    }
}