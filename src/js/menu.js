window.onscroll = function() {myFunction()};

function myFunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    document.getElementById("navbar").style.opacity = scrolled / 100;
}