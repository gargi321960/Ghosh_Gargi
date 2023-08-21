let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


let cursor1=document.querySelector('.cursor-1');
let cursor2=document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top =e.pageY + 'px';
    cursor1.style.left =e.pageX + 'px';
    cursor2.style.top =e.pageY + 'px';
    cursor2.style.left =e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links=>{
    links.onmouseenter = () =>
    {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () =>
    {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})





let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slider img').length;

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    manualSlide(currentSlide);
}

function manualSlide(slideIndex) {
    const translateX = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${translateX}%)`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    manualSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    manualSlide(currentSlide);
});

setInterval(autoSlide, 3000);












function openEmailClient() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Contact Form Submission";
    var body = "Name: " + name + "%0AEmail: " + email + "%0AMessage: " + message;

    var mailtoLink = "mailto:gargighosh2107@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open a new window with the mailto link
    window.open(mailtoLink);

    // Prevent the form from actually submitting
    return false;
}


