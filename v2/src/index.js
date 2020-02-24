
import Typed from 'typed.js'
import anime from 'animejs'
import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/list'

const transitionOverlay = document.getElementById('transition-overlay')


function main(){
    sceneTwo()
    // sceneFour()
    // sceneFive()
    // sceneSix()
}

document.getElementById('service-button').addEventListener('click', sceneThreeTransition)
document.getElementById('gallery-button').addEventListener('click', sceneFourTransition)
document.getElementById('testimonial-button').addEventListener('click', sceneFiveTransition)


function sceneTwo(){
    const  doors = document.getElementById('elevator-doors')
    

    //welcome message
    const options = {
        strings: ['welcome-msg', 'Hello. ^500 <br> Welcome to GONC development services! ', '^300 It seems you are new here.<br> ^300 Head on over to our elevator doors for a quick tour!'],
        typeSpeed: 40,
        onComplete: () =>{
            doors.addEventListener('mouseenter', () =>{
                doors.classList.add('open')
            })
            doors.addEventListener('mouseleave', ()=>{
                doors.classList.remove('open')
            })
        
            doors.addEventListener('click', ()=>{
                const scene = document.getElementById('scene-2')
                setTimeout(() => {
                    transitionOverlay.style.display = 'block'
                    transitionOverlay.classList.add('transition')
        
                }, 3250)
                setTimeout( () => {
                    transitionOverlay.style.display = 'none'
                    transitionOverlay.classList.remove('transition')
                    scene.style.display = 'none'
                    const nextScene = document.getElementById('scene-3')
                    nextScene.style.display = 'block'
                    sceneThree()
                }, 5250)
                scene.classList.add('transition')
                doors.classList.add('open')
                
            })
        }
      };
      
    new Typed('#desk-avatar-speech', options);
}

function sceneThree(){
    let animating = false
    const lever = document.getElementById('g921')
    const dial = document.getElementById('path857')
    const light = document.getElementById('path829')
    const light2 = document.getElementById('path831')
    const narrator = document.getElementById('machine-narrator')

    new Typed("#machine-narrator-speech",{
        strings: ['msg', 'Here we can learn about the products GONC offers. <br> </brb>^500 Pull down the lever and find out what we do! ^2000'],
        typingSpeed: 40,
        onComplete: () =>{
            narrator.style.opacity= 0
        }
    })

    lever.addEventListener('click', () =>{
        if(!animating){
            animating=true
            const leverAnim = anime({
                targets: lever,
                easing: 'easeInOutSine',
                duration: 700,
                translateY: '60px',
                rotate: '60deg',
              })
        
              const dialAnim = anime({
                targets: dial,
                easing: 'linear',
                loop:true,
                duration: 500,
                rotate: '1turn',
              })
        
              const lightAnim = anime({
                targets: light,
                fill: '#F00',
                loop: true,
                easing: 'linear',
                duration: 250
              });
        
              const light2Anim = anime({
                targets: light2,
                fill: '#0F0',
                loop: true,
                easing: 'linear',
                duration: 400,
                delay: 250
              });
    
              let timeline = anime.timeline({
                  easing: 'linear',
                  duration: 500
                })
              timeline.add({
                targets: '#service-description',
                translateX: '35vw', 
                opacity: 1
              })
    
              timeline.add({
                targets: '#service-description',
                translateY: '35vh', 
                height: '75vh',
                width: '30vw',
                top: '-30vh',
                complete: () =>{
                    animating=false
                    setTimeout(() =>{
                        leverAnim.pause()
                    lightAnim.pause()
                    light2Anim.pause()
                    dialAnim.pause()
                    }, 5000)
                }
              })
        }
        
              

        //   anime({
        //     targets: gear2,
        //     easing: 'linear',
        //     loop:true,
        //     duration: 500,
        //     rotate: '1turn',
        //   });

        //   anime({
        //     targets: gear,
        //     easing: 'linear',
        //     loop:true,
        //     duration: 500,
        //     rotate: '1turn',
        //   });
    })

    
}


function sceneThreeTransition(){
    transitionOverlay.style.display = 'block'
    transitionOverlay.classList.add('transition')
    setTimeout(()=>{
        transitionOverlay.classList.remove('transition')
        transitionOverlay.style.display = 'none'
        
        document.getElementById('scene-3').style.display = 'none'
        const nextScene = document.getElementById('scene-4')
        nextScene.style.display = 'block'
        sceneFour()
    }, 2500)
}



function sceneFour(){
    const narrator = document.getElementById('gallery-narrator')
    narrator.classList.add('fade-in')
    let typist
    const scene = document.getElementById('scene-4')
    const sectionTwo = document.getElementById('gallery-section-2')
    const sectionThree = document.getElementById('gallery-section-3')
    const sectionFour = document.getElementById('gallery-section-4')

    const options = {
        strings: ['...', 
        'Hi there! <br> This is the gallery of our completed projects!', 'Let me give you a brief tour.', 
        'The first project belongs to Charming Imagez, a photo studio.', 
    ],
        typeSpeed: 40,
        onComplete: () =>{
            typist.destroy()
            narrator.classList.remove('fade-in')
            narrator.classList.add('fade-out')
            narrator.style.left = `${sectionTwo.offsetLeft}px`
            scene.scrollBy({top: 0, left: sectionTwo.offsetLeft, behavior: 'smooth'})
            narrator.classList.remove('fade-out')
            narrator.classList.add('fade-in')
            typist = new Typed('#gallery-narrator-speech',{
                strings: ['...', 'This second project belongs to AdventuresZW a tourism outfit.^1500'],
                typingSpeed: 80,
                onComplete: () =>{
                    typist.destroy()
                    narrator.classList.remove('fade-in')
                    narrator.classList.add('fade-out')
                    scene.scrollBy({
                        top: 0, 
                        left: sectionThree.offsetLeft - sectionTwo.offsetLeft, 
                        behavior: 'smooth'})
                    narrator.style.left = `${sectionThree.offsetLeft}px`
                    narrator.classList.remove('fade-out')
                    narrator.classList.add('fade-in')
                    typist = new Typed('#gallery-narrator-speech',{
                        strings: ['...', 'The third project belongs to Cesteg engineering.^1500'],
                        typingSpeed: 80,
                        onComplete: () =>{
                            typist.destroy()
                            narrator.classList.remove('fade-in')
                            narrator.classList.add('fade-out')
                            scene.scrollBy({
                                top: 0, 
                                left: sectionFour.offsetLeft - sectionThree.offsetLeft, 
                                behavior: 'smooth'})
                            narrator.style.left = `${sectionFour.offsetLeft}px`
                            narrator.classList.remove('fade-out')
                            narrator.classList.add('fade-in')
                            typist = new Typed('#gallery-narrator-speech',{
                                strings: ['...', 'The Fourth project is our crowning achievement, Bentsch a business management system.^1500'],
                                typingSpeed: 80,
                                onComplete: () =>{
                                    typist.destroy()
                                }
                            })
                        }
                    })
                }
            })
        }
      };
    
    
    
    typist = new Typed('#gallery-narrator-speech', options)
    
}

function sceneFourTransition(){
    transitionOverlay.style.display = 'block'
    transitionOverlay.classList.add('transition')
    setTimeout(()=>{
        transitionOverlay.classList.remove('transition')
        transitionOverlay.style.display = 'none'
        
        document.getElementById('scene-4').style.display = 'none'
        const nextScene = document.getElementById('scene-5')
        nextScene.style.display = 'block'
        sceneFive()
    }, 2500)
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
        'Over time, ^500 we have had the opportunity to work with some awesome people. <br> ^1000 Let us meet some of them and hear what they think of our service. ^1200', 
        
    ],
        typeSpeed: 40,
        onComplete: () =>{
            testimonialNarrator.style.opacity = 0
            mech.style.opacity = 1
            scene.scrollBy({top: 0, left: busOne.offsetLeft, behavior:'smooth'})
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
                                    left: busThree.offsetLeft - busTwo.offsetLeft, behavior:'smooth'})
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
        }
      };
    new Typed('#testimonial-narrator-speech', options)
    

    
}

function sceneFiveTransition(){
    transitionOverlay.style.display = 'block'
    transitionOverlay.classList.add('transition')
    setTimeout(()=>{
        transitionOverlay.classList.remove('transition')
        transitionOverlay.style.display = 'none'
        
        document.getElementById('scene-5').style.display = 'none'
        const nextScene = document.getElementById('scene-6')
        nextScene.style.display = 'block'
        sceneSix()
    }, 2500)
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