const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav")
const xIcon = document.querySelector(".x-icon") 

const state = {
    show : false
}

 xIcon.style.display = "none"  
   hamburger.addEventListener("click", () => {      
       if(!state.show){
        nav.style.display = "flex"
        xIcon.style.display = "block" 
        hamburger.style.display = "none"
   }
       state.show = !state.show
})

xIcon.addEventListener("click", () => {
    if(state.show){
        nav.style.display = "none" 
        xIcon.style.display = "none"  
        hamburger.style.display = "block"
    }
    state.show = !state.show
})