var searchbtn = document.getElementById('search-btn')
var searchbar = document.querySelector('.search-bar-container')
var loginbtn = document.querySelector('#login-btn')
var loginform = document.querySelector('.login-form-container')
var loginclose = document.querySelector('#form-close')
var menubar = document.querySelector('#menu-bar')
var navbar = document.querySelector('.navbar')
var videosbtn = document.getElementsByClassName('vid-btn')
for (var i = 0; i < videosbtn.length; i++) {
    var videobtn = videosbtn[i]
    videobtn.addEventListener('click', ShowVideo)
}
var videoslider = document.getElementById('video-slider')

var swiper = new Swiper(".swiper-container", { /*swiper from https://swiperjs.com/*/
    spaceBetween: 20, /* the space between the slides*/
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false, /* it wont stop if you click or interact with the swiper*/
    },
    breakpoints: { /* breakpoints are for a responsive swiper*/
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


searchbtn.addEventListener('click', ShowSearch)
searchbar.addEventListener('click', ShowSearch)
loginbtn.addEventListener('click', ShowLoginForm)
loginclose.addEventListener('click', HideLoginForm)
menubar.addEventListener('click', ShowNavBar)


window.onscroll = scrollsearch

function ShowSearch(event) {
    var searchbtn = event.target
    searchbtn.classList.toggle('fa-times')
    searchbar.classList.toggle('active')
}

function scrollsearch() {
    searchbtn.classList.remove('fa-times')
    searchbar.classList.remove('active')

}

function ShowLoginForm(event) {
    var loginbtn = event.target

    loginform.classList.add('active')

}

function HideLoginForm(event) {
    var loginclose = event.target

    loginform.classList.remove('active')

}

function ShowNavBar(event) {
    var menubar = event.target

    navbar.classList.toggle('active')
}

function ShowVideo(event) {
    var videobtn = event.target
    console.log(videosbtn)
    document.querySelector('.controls .active').classList.remove('active')
    videobtn.classList.add('active')
    var src = videobtn.getAttribute('data-src')
    videoslider.src = src
}
/* Vars for adding conditions on the forms*/
var bookNow = document.getElementById('booknow')
bookNow.addEventListener('click', BookCond)

var sendmsg=document.getElementById('sendmsg')
sendmsg.addEventListener('click', Contact)
/* End of vars declaration*/

/* function for adding conditions on the forms*/

function BookCond(event) {
    var bookNow = event.target
    var destination = document.getElementById("Place")
    var numberguests = document.getElementById("guests")


    if (destination.value === '') {
        alert('Please enter your destination to book')
    }

    if (isNaN(numberguests.value) || numberguests.value <= 0) {
        numberguests.value = 1
    }
}

function Contact(event){
    var sendmsg=event.target
    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var number=document.getElementById("number")
    var subject=document.getElementById("text")
    var msg =document.getElementById("textarea")

    if ((name.value ==='') || (email.value ==='') || (number.value ==='') || (subject.value ==='') || (msg.value ==='')){
        alert('Please enter the full information in order to contact us')
    }
}