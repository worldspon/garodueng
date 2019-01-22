var nav_font = document.getElementsByClassName('nav_font');
var nav_img = document.getElementById('nav_img');
var header = document.querySelector('header');
var faq_arrow = document.querySelectorAll('.faqs_content_hl a');
var faq_content = document.querySelectorAll('.faqs_content');
var banner = document.getElementById('banner');
var banner_height=0;

Array.from(faq_arrow).forEach((val,index,e) => {
    e[index].addEventListener('click',function(){
        con_visible(index);
    });
});

function con_visible(super_index) {
    Array.from(faq_content).forEach((val,index,e) => {
        if(super_index!=index){
            e[index].style.display = "none";
        }
    });
    if(faq_content[super_index].style.display=="none"){
        faq_content[super_index].style.display="block";
    }else if((faq_content[super_index].style.display=="block")) {
        faq_content[super_index].style.display="none";
    }
    console.log(faq_content[super_index].style.display);
}

window.addEventListener('scroll', function(){
    banner_height = banner.clientHeight;
    change_nav(banner_height);
});

window.addEventListener('resize',function(){
    //
})


function change_nav(height) {
    if(window.scrollY<height){
        header.style.background = 'none';
    } else if (window.scrollY>height){
        header.style.backgroundColor = '#532480';
    }
}
