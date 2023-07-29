const projects_radio = document.querySelector('#projects-radio');
const stack_radio = document.querySelector('#stack-radio');
const contact_radio = document.querySelector('#contact-radio');
const contact_head = document.querySelector('.contact-head');

const porfolio_label = document.querySelector('#label1');
const project_label = document.querySelector('#label2');
const stack_label = document.querySelector('#label3');
const contact_label = document.querySelector('#label4');

const porfolio_tag = document.querySelector('.slider-tag1');
const project_tag = document.querySelector('.slider-tag2');
const stack_tag = document.querySelector('.slider-tag3');
const contact_tag = document.querySelector('.slider-tag4');

const stack_container = document.querySelector('.stack-container');
const stack_text = document.querySelector('.stack-text');

const project1 = document.querySelector('#project1');
const project2 = document.querySelector('#project2');
const project3 = document.querySelector('#project3');
const project4 = document.querySelector('#project4');

const contact_left1 = document.querySelector('.contact-left1');
const contact_left2 = document.querySelector('.contact-left2');
const contact_left3 = document.querySelector('.contact-left3');
const contact_right1 = document.querySelector('.contact-right1');
const contact_right2 = document.querySelector('.contact-right2');
const contact_right3 = document.querySelector('.contact-right3');
const contact_right4 = document.querySelector('.contact-right4');

var slider = document.querySelector('.slider');
var speed = 10;
var maxSliderHeight = 300;
const page_height = (window.innerHeight)*3;
function expandSlider(){
    let scroll = window.scrollY;
    // console.log(page_height);
    // console.log(scroll);
    let ratio_page = scroll/page_height;
    let sliderHeight = ratio_page*maxSliderHeight;
    slider.style.height = (ratio_page*maxSliderHeight) + "px";

    if(sliderHeight/maxSliderHeight >= 0.05){
        porfolio_label.style.animationName = '';
    }
    if(sliderHeight/maxSliderHeight >= 0.33){
        projects_radio.checked = true;
        project_label.style.animationName = '';
    }
    if(sliderHeight/maxSliderHeight >= 0.66){
        stack_radio.checked = true;
        stack_label.style.animationName = '';
    }
    if(sliderHeight/maxSliderHeight >= 0.99){
        contact_radio.checked = true;
        contact_label.style.animationName = '';
    }
    
    if(sliderHeight/maxSliderHeight < 0.005){
        porfolio_label.style.animationName = 'none';
    }
    if(sliderHeight/maxSliderHeight < 0.33){
        projects_radio.checked = false;
        project_label.style.animationName = 'none';
    }
    if(sliderHeight/maxSliderHeight < 0.66){
        stack_radio.checked = false;
        stack_label.style.animationName = 'none';
    }
    if(sliderHeight/maxSliderHeight < 0.99){
        contact_radio.checked = false;
        contact_label.style.animationName = 'none';
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener('scroll', function() { // on page scroll
    requestAnimationFrame(expandSlider); // call parallaxing()
    if(checkVisible(stack_container)){
        stack_container.style.animationPlayState = 'running';
        stack_text.style.animationPlayState = 'running';
    }
    if(checkVisible(project1)){
        // const project = document.querySelector('.project-section');
        // project.scrollIntoView({ behavior: "smooth" });
        project1.style.animationPlayState = 'running';
        project2.style.animationPlayState = 'running';
        project3.style.animationPlayState = 'running';
        project4.style.animationPlayState = 'running';
    }
    if(checkVisible(contact_head)){
        contact_left1.style.animationPlayState = 'running';
        contact_left2.style.animationPlayState = 'running';
        contact_left3.style.animationPlayState = 'running';

        contact_right1.style.animationPlayState = 'running';
        contact_right2.style.animationPlayState = 'running';
        contact_right3.style.animationPlayState = 'running';
        contact_right4.style.animationPlayState = 'running';
    }
  }, false);

porfolio_tag.addEventListener('click', ()=>{
    const intro = document.querySelector('.intro-section');
    intro.scrollIntoView({ behavior: "smooth" });
})
project_tag.addEventListener('click', ()=>{
    const project = document.querySelector('.project-section');
    project.scrollIntoView({ behavior: "smooth" });
})
stack_tag.addEventListener('click', ()=>{
    const stack = document.querySelector('.stack-section');
    stack.scrollIntoView({ behavior: "smooth" });
})
contact_tag.addEventListener('click', ()=>{
    const contact = document.querySelector('.contact-section');
    contact.scrollIntoView({ behavior: "smooth" });
})