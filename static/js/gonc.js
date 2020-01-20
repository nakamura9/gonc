function scrollPageTo(id) {
    var nav = document.getElementById('nav');
    nav.classList.toggle('nav-visible')
    var duration = 500;
    var to =document.getElementById(id).offsetTop
    if (document.body.scrollTop == to) return;
    start = window.pageYOffset;
    var diff = to - start;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    
    console.log(diff)
    window.scrollBy({ top: diff, left: 0, behavior: 'smooth' })
    
}

function showNav(){
    var nav = document.getElementById('nav');
    nav.classList.toggle('nav-visible')
}

