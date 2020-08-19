function smoothScroll(target,duration)
{
    alert(target)
    let t=document.getElementsByClassName(target)[0]
    let targetPosition=t.getBoundingClientRect().top
    let startPosition=window.pageYOffset
    let distance=targetPosition-startPosition
    let starttime=null
    
function animation(currenttime)
{
    if(starttime===null)
    {
        starttime=currenttime
    }
    let timeLapsed=currenttime-starttime
    let run=ease(timeLapsed,startPosition,distance,duration)
    window.scrollTo(0,run)
    if(timeLapsed<duration) requestAnimationFrame(animation)
}
function ease(t,b,c,d)
{
    t/=d/2
    if(t<1) return c/2*t*t+b;
    t--
    return -c/2*(t*(t-2)-1)+b
}
requestAnimationFrame(animation)
}
document.querySelectorAll(".navlink").forEach(e=>{
    e.addEventListener("click",p=>{
        smoothScroll(e.id,3000)
    })
})
const print=(a,b,c)=>
{}
var scrollDistance = function (callback, refresh) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Variables
	var isScrolling, start, end, distance;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Set starting position
		if (!start) {
			start = window.pageYOffset;
		}

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Calculate distance
			end = window.pageYOffset;
			distance = end - start;
			// Run the callback
			callback(distance, start, end);

			// Reset calculations
			start = null;
			end = null;
			distance = null;

		}, refresh || 66);

	}, false);

};
scrollDistance(print)
let localstoragecolor=localStorage.getItem("color")
var checkbox = document.querySelector('input[name=theme]');
if(localstoragecolor=="black"){
document.documentElement.setAttribute('data-theme', 'dark')
checkbox.checked=true}
let boolhamburger=true
let i=1
let v= document.querySelectorAll(".introwords")
setInterval(() => {
    v[i-1].classList.remove("enter")
    v[i-1].classList.add("exit")
    if(i==3)
        i=0
    v[i].classList.remove("hide10")
    v[i].classList.remove("exit")
    v[i].classList.add("enter")
        i++
}, 3000);
document.querySelector(".hamburger").addEventListener("click",(e)=>{
    document.querySelectorAll(".line").forEach((element,i) => {
        element.classList.toggle("open")
    });
    document.querySelector(".navlinks").classList.toggle("open")
});
checkbox.addEventListener('change', function() {
if(this.checked) {
trans()
document.documentElement.setAttribute('data-theme', 'dark')
localStorage.setItem("color","black")
} else {
trans()
document.documentElement.setAttribute('data-theme', 'light')
localStorage.setItem("color","white")
}
})

let trans = () => {
document.documentElement.classList.add('transition');
window.setTimeout(() => {
document.documentElement.classList.remove('transition')
}, 1000)
}
document.querySelector(".getintouchform").addEventListener("submit",(e)=>{
e.preventDefault()
let email=document.querySelector("#email")
let message=document.querySelector("#messageform")
let errormessage=document.querySelector("#errormessage")
if(message.value==""){
errormessage.style.color="red"
errormessage.style.fontFamily="Poppins"
errormessage.textContent="**Please enter a message**"}
else{
errormessage.style.color="#6C63FF"
errormessage.style.fontFamily="Playfair Display"
errormessage.textContent="Thanks for the message.I shall get back to you soon!!!"
}
})