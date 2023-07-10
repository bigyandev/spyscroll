let li = document.querySelectorAll("li");
let sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
 entries.forEach((entry) => {
 li.forEach((list) => {
   if(entry.isIntersecting) {
    let target = entry.target.firstElementChild.id
    //console.log(list.id);
     if(list.id === target) {
       list.style.color = "black"
      
    
     }
     else {
        list.style.color = "coral";
        
     }
    
   }
})
 
 })
},{
  threshold: 0.5
}
)
sections.forEach((section) => {
    observer.observe(section)
})

