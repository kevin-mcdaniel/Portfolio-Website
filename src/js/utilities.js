//https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/

if(!!window.IntersectionObserver){
    [...document.querySelectorAll(".jobPosition")].forEach((e) => e.classList.remove("offScreen"));
}

document.querySelectorAll('.jobPosition').forEach(job => { observer.observe(job) });

let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.remove("offScreen");
        })
    },
    {rootMargin:"0px 0px -200px 0px"})