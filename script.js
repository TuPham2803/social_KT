//Login
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop())
        {
           
            $('header').addClass('sticky');
        }
        else
        {
            $('header').removeClass('sticky');
        }
    });
});

// Slider
let slideIndex = 0;
autoshowSlides();
function autoshowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoshowSlides, 2000); // Change image every 2 seconds
}
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
     showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Story
let storyIndex = 0;
function showStory(direction) {
    let stories = document.getElementsByClassName("myStory");
    
    if (storyIndex == 0 && direction=='left'|| storyIndex== stories.length-1 && direction=='right'){
        
        return;
  
    }
    if(direction == 'right'){
        storyIndex++;
        stories[storyIndex-1].style.display = "none";
        
    }
    else {
        storyIndex--;
        stories[storyIndex].classList.add("animate__animated");
        stories[storyIndex].classList.add("animate__slideInLeft");
        stories[storyIndex].style.display = "block";
    }
}

//market prodiuct
function market(type,element)
{
    let tabs = document.getElementsByClassName('item');
    for(i=0;i<tabs.length;i++)
    {
        tabs[i].style.background='#362f2f';
    }
    element.style.background ='#f42424';

    document.getElementById(type).style.display='block';
    switch (type) {
        case 'luachon1':
            document.getElementById('luachon2').style.display='none';
            document.getElementById('luachon3').style.display='none';
           
            break;
        case 'luachon2':
            document.getElementById('luachon1').style.display='none';
            document.getElementById('luachon3').style.display='none';
            
            break;
        case 'luachon3':
            document.getElementById('luachon2').style.display='none';
            document.getElementById('luachon1').style.display='none';
            break;
      
        default:
            break;
    }
}

//messenge info boxchat
function giaodien(type,element)
{
    if (mobile.matches) { // If media query matches
        let mess = document.querySelector(".mess_er");
        mess.style.display='none';
    }
    else
   {
        let tabs = document.getElementsByClassName('gd');
        for(i=0;i<tabs.length;i++)
        {
            tabs[i].style.background='#AB9383';
        }
        element.style.background ='#daa48e';
    }   

    document.querySelector('.box_chat').style.display='none';
    let khungtinnhan = document.querySelectorAll(".khungtinnhan");
    for(let i=0;i<khungtinnhan.length;i++){
        khungtinnhan[i].style.display='none';
    }

    document.getElementById(type).style.display='block';
}

//messenge mobile box chat back member
function back(){
    let khungtinnhan = document.querySelectorAll(".khungtinnhan");
    for(let i=0;i<khungtinnhan.length;i++){
        khungtinnhan[i].style.display='none';
    }
    mess=document.querySelector(".mess_er");
    mess.style.display='block';
}

//market uncheck all checkbox
function UnCheckAll(){
    let list_input = document.querySelectorAll('#market > #menu-option input[type="text"]');
    for (let i=0; i < list_input.length;i++){
        list_input[i].value = "";
    }
    let list_checkbox = document.querySelectorAll('input[type="checkbox"]');
    for(let i=0;i<list_checkbox.length;i++){
        list_checkbox[i].checked = false;
    }
    
}

//nofication manager
function showNofi(curr_page)
{
    let nofication = document.querySelector('#nofication');
    let head = document.getElementById("header");
    if (!mobile.matches ) { // If media query matches
        head.classList.remove("animate__slideInDown");
        head.classList.add("animate__animated");
        head.classList.add("animate__slideOutUp");
    }
    else{/** trên mobile */
        document.getElementById('slider').style.display= 'block';/** hiện slider khi đang ở trang mess lúc bấm thông báo*/
        
        let tabs = document.querySelectorAll('.tab-item > a');
        for(let tab of tabs){
            tab.style.backgroundColor = '#fff';/** đổi màu 3 cái icon menu khi chọn thông báo */
        }
        document.querySelector('.js-bell').style.backgroundColor = "#9E663B";
        document.getElementById(curr_page).style.display='none';/**ẩn trang hiện tại */
    }
    nofication.classList.add('open');

}
function hideNofi()
{
    let nofication = document.querySelector('#nofication');
    nofication.classList.remove('open');
    let head = document.getElementById("header");
    if (!mobile.matches ) { // If media query matches
        head.classList.remove("animate__slideOutUp");
        head.classList.add("animate__slideInDown")
    }
}

var mobile = window.matchMedia("(max-width: 1024px)")
