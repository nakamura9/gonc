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



window.onload = function(){
    this.document.addEventListener('scroll', function(){
        var services = document.getElementById('services');
        var services_location = services.offsetTop;
        var offset = services_location - window.pageYOffset
        if(offset > 0){
            var ratio = offset / services_location
            var hero = document.getElementById('hero')
            var angle = ratio * 90
            hero.style.background = 'linear-gradient(' + angle + 'deg, #039be5 50%, #fff 50%)' 
        }
        
    })
}