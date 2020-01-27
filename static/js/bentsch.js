var activeLink ='hero-link'
var currentLocation

window.onload = function(){
    //sets the active nav element
    var features = document.getElementById('features').offsetTop
    var modules  = document.getElementById('modules').offsetTop
    var packages = document.getElementById('packages').offsetTop
    var testimonials = document.getElementById('testimonials').offsetTop
    var contact = document.getElementById('contact').offsetTop
    
    this.document.addEventListener('scroll', function(){
        currentLocation = window.pageYOffset
        if(currentLocation >= features && currentLocation < modules && activeLink != 'features-link'){
            document.getElementById('features-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'features-link'
        }else if(currentLocation >= modules && currentLocation < packages && activeLink != 'modules-link'){
            document.getElementById('modules-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'modules-link'
        }else if(currentLocation >= packages && currentLocation < testimonials && activeLink != 'packages-link'){
            document.getElementById('packages-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'packages-link'
        }else if(currentLocation >= testimonials && currentLocation < contact && activeLink != 'testimonials-link'){
            document.getElementById('testimonials-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'testimonials-link'
        }else if(currentLocation >= contact && activeLink != 'contact-link'){
            document.getElementById('contact-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'contact-link'
        }
    })


}

var activeModule = 'sales'


function setActiveModule(name){
    //update buttons
    var button = document.getElementById(name + '-button')
    button.classList.add('active')
    var activeButton = document.getElementById(activeModule + '-button')
    activeButton.classList.remove('active')
    
    //update views
    var view  = document.getElementById(name)
    view.classList.add('active')
    var activeView = document.getElementById(activeModule)
    activeView.classList.remove('active')

    activeModule = name
}


function showNav(){
    var target = document.getElementById('nav');
    target.classList.toggle('nav-visible')
}