
import Typed from 'typed.js'
import { SVG } from '@svgdotjs/svg.js'
import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/list'

const transitionOverlay = document.getElementById('transition-overlay')


function main(){
    // scene 2
    // sceneTwo()
    //scene-3
    // sceneThree()
    // sceneFour()
    // sceneFive()
    sceneSix()
}


function sceneTwo(){
    const  doors = document.getElementById('elevator-doors')
    
    doors.addEventListener('mouseenter', () =>{
        doors.classList.add('open')
    })
    doors.addEventListener('mouseleave', ()=>{
        doors.classList.remove('open')
    })

    doors.addEventListener('click', ()=>{
        const scene = document.getElementById('scene-2')
        setTimeout(() => {
            console.log('transition-overlay')
            transitionOverlay.style.display = 'block'
            transitionOverlay.classList.add('transition')

        }, 3250)
        setTimeout( () => {
            transitionOverlay.style.display = 'none'
            transitionOverlay.classList.remove('transition')
            scene.style.display = 'none'
            const nextScene = document.getElementById('scene-3')
            nextScene.style.display = 'block'
        }, 5250)
        scene.classList.add('transition')
        doors.classList.add('open')
        
    })

    //welcome message
    const options = {
        strings: ['welcome-msg', 'Hello. <br> Welcome to GONC development services!', 'It seems you are new here.<br> Head on over to our elevator doors for a quick tour!'],
        typeSpeed: 40
      };
      
    new Typed('#desk-avatar-speech', options);
}

function sceneThree(){
    const lever = document.getElementById('lever')
    // console.log(lever)
    // const leverSVG = SVG('#lever');
    // leverSVG.attr({ x: 20, y: 60 })
}


function sceneFour(){
    const narrator = document.getElementById('gallery-narrator')
    narrator.classList.add('fade-in')
    const options = {
        strings: ['welcome-msg', 
        'Hi there! <br> This is the gallery of our completed projects!', 'Let me give you a brief tour.', 
        'The first project belongs to Charming Imagez, a photo studio.', 
        '^4000 This second project belongs to AdventuresZW a tourism outfit.',
        '^4000 The third project belongs to Cesteg engineering.',
        '^4000 The Fourth project is our crowning achievement, Bentsch a business management system.'
    ],
        typeSpeed: 40
      };
    const scene = document.getElementById('scene-4')
    const sectionTwo = document.getElementById('gallery-section-2')
    const sectionThree = document.getElementById('gallery-section-3')
    const sectionFour = document.getElementById('gallery-section-4')
    
    
    setTimeout(()=> {new Typed('#gallery-narrator-speech', options);}, 1500)
    setTimeout(() =>{ 
        narrator.classList.remove('fade-in')
        narrator.classList.add('fade-out')
        scene.scrollBy({top: 0, left: sectionTwo.offsetLeft, behavior: 'smooth'})
    }, 15000)
    setTimeout(()=>{
        narrator.style.left = `${sectionTwo.offsetLeft}px`
        narrator.classList.remove('fade-out')
        narrator.classList.add('fade-in')
        
    }, 17000)
    setTimeout(()=>{
        scene.scrollBy({top: 0, 
            left: sectionThree.offsetLeft - sectionTwo.offsetLeft, 
            behavior: 'smooth'
        })
        narrator.style.left = `${sectionThree.offsetLeft}px`
        narrator.classList.remove('fade-out')
        narrator.classList.add('fade-in')
    }, 21000)
    setTimeout(()=>{
        scene.scrollBy({top: 0, 
            left: sectionFour.offsetLeft - sectionThree.offsetLeft, 
            behavior: 'smooth'
        })
        narrator.style.left = `${sectionFour.offsetLeft}px`
        narrator.classList.remove('fade-out')
        narrator.classList.add('fade-in')
    }, 31000)
}

function sceneFive(){
    const scene = document.getElementById('scene-5')
    const mech = document.getElementById('mech-speech')
    const photographer = document.getElementById('photo-speech')
    const accountant  = document.getElementById('accountant-speech')
    const busOne  = document.getElementById('business-1')
    const busTwo = document.getElementById('business-2')
    const busThree = document.getElementById('business-3')
    const testimonialNarrator = document.getElementById('testimonial-narrator')
    const options = {
        strings: ['welcome-msg', 
        'Over time, ^500 we have had the opportunity to work with some awesome people. <br> ^1000 Let us meet some of them and hear what they think of our service.', 
        
    ],
        typeSpeed: 40
      };
    new Typed('#testimonial-narrator-speech', options)
    setTimeout(() => { 
        testimonialNarrator.style.opacity = 0
        scene.scrollBy({top: 0, left: busOne.offsetLeft, behavior:'smooth'})
    }, 12000)

    setTimeout(() => { 
        testimonialNarrator.style.opacity = 0
        scene.scrollBy({top: 0, left: busOne.offsetLeft, behavior:'smooth'})
        mech.style.opacity = 1
        new Typed('#mech-speech', {
            strings: ['message', 'I was very impressed by the professionalism and passion shown by GONC, ^250 they perfectly aligned with my goals.^500 <p><i>Godknows</i><b>,CESTEG</b></p>'
        ],
            typeSpeed: 40,
            onComplete: () =>{
                scene.scrollBy({top: 0, 
                    left: busTwo.offsetLeft - busOne.offsetLeft, behavior:'smooth'})
                    mech.style.opacity = 0
                    photographer.style.opacity = 1
                    new Typed('#photo-speech', {
                        strings: ['message', "GONC's services were brilliant, they executed my creative vision and their after sales service was top notch."
                    ],
                        typeSpeed: 40,
                        onComplete: () =>{
                            scene.scrollBy({top: 0, 
                                left: busTwo.offsetLeft - busOne.offsetLeft, behavior:'smooth'})
                            photographer.style.opacity = 0
                            accountant.style.opacity = 1
                            new Typed('#accountant-speech', {
                                strings: ['message', "Bentsch has elevated my productivity and ensured I stay on top of things, even in these hectic times."
                            ],
                                typeSpeed: 40})
                        }
                    })
            }
        })
    }, 12000)

}

function sceneSix(){
    console.log('narrator!')
    const narrator = document.getElementById('news-narrator')
    new Typed('#news-narrator-speech', {
        strings: ['message', 'Finally, ^200 we visit our newsstand. ^250 Here you can get the latest news from our blog. Click the newspaper to open the latest posts. <br> ^500 I hope you enjoyed our little tour and learned more about us!'
    ],
        typeSpeed: 40,
        onComplete: () =>{
            setTimeout(() =>{narrator.style.opacity = 0}, 1500)
        }
    })

    const closedNewspaper = document.getElementById('newspaper')
    const openNewspaper = document.getElementById('newspaper-open')
    const contents = document.getElementById('newspaper-contents')
    closedNewspaper.addEventListener('click', ()=>{
        openNewspaper.style.display = 'block'
        openNewspaper.classList.add('open')
        setTimeout(() =>{contents.style.display= 'block'}, 2000)

    })
}
window.onload = main

ReactDOM.render(<List />, document.getElementById('newspaper-contents'))