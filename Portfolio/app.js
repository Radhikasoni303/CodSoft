var typed = new Typed('#element', {
    strings: [' Web Developer', ' Prompt Engineer.'],
    typeSpeed: 50,
});

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(const tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(const tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        } 
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
         
        
        const right = document.querySelector('.right');
        right.classList.remove('v-class');
        right.classList.remove('h-nav');

       
    }
    const Hamburger = document.querySelector('.Hamburger');
    const right = document.querySelector('.right');
    
    Hamburger.addEventListener('click', () => {
        right.classList.toggle('v-class');
        right.classList.toggle('h-nav');
    });
    
    
    
    
    
    
    




