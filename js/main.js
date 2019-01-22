const header = document.querySelector('header');
const banner = document.getElementById('banner');
const header_height = document.querySelector('.header_inner').clientHeight;
var banner_height=0;

const side_menu = document.querySelector('.side_menu');
const side_btn1 = document.querySelector('.side_btn1');
const side_btn2 = document.querySelector('.side_btn2');
var menu_flag = 0;


const arrow_l = document.querySelector('.arrow_l');
const arrow_r = document.querySelector('.arrow_r');
const pre_box = document.querySelector('.prev_box');
const cur_box = document.querySelector('.cur_box');
const next_box = document.querySelector('.next_box');
var cur_box_flag = 3;


const faq_btn = document.querySelectorAll(".faq_btn");
const faqs_content = document.querySelectorAll('.faqs_content');
var fqas_index = 0;

faqs_content.forEach(l => {
    l.style.display="none";
});



faq_btn.forEach(e => {
    e.addEventListener('click',function(){
        faqs_index = Array.from(faq_btn).indexOf(this);
        
        faqs_content.forEach((val, index, l) => {
            if(faqs_index!=index){
                l[index].style.display="none";
            }
        });
        if(faqs_content[faqs_index].style.display=='none'){
            faqs_content[faqs_index].style.display='block';
        } else if(faqs_content[faqs_index].style.display=='block'){
            faqs_content[faqs_index].style.display='none';
        }
    });
});

faqs_content.forEach(e => {
    e.style.display="none";
});



side_btn1.addEventListener('click',function(){;
    side_menu.style.marginRight = 0;
    setTimeout(change_menu_flag, 1);
});

side_btn2.addEventListener('click',function(){;
    side_menu.style.marginRight = -160+'px';
    menu_flag=0;
});


window.addEventListener('click',function(){
    if(menu_flag){
        side_menu.style.marginRight = -160+'px';
        menu_flag=0;
    }
});


// scroll 이동시 nav background-color 변경
window.addEventListener('scroll', function(){
    banner_height = banner.clientHeight; // banner 높이값 get
    change_nav(banner_height);
});



arrow_r.addEventListener('click',function(){
    cng_pic_r();
});

arrow_l.addEventListener('click',function(){
    cng_pic_l();
});


function cng_pic_r() {
    cur_box_flag++;
    if(cur_box_flag>3){
        cur_box_flag=1;
    }
    switch (cur_box_flag) {
        case 1:
            pre_box.setAttribute('src','image/preview'+cur_box_flag+'.png');
            cur_box.setAttribute('src','image/preview'+(cur_box_flag+1)+'.png');
            next_box.setAttribute('src','image/preview'+(cur_box_flag+2)+'.png');
            break;

        case 2:
            pre_box.setAttribute('src','image/preview'+cur_box_flag+'.png');
            cur_box.setAttribute('src','image/preview'+(cur_box_flag+1)+'.png');
            next_box.setAttribute('src','image/preview'+(cur_box_flag-1)+'.png');
            break;

        case 3:
            pre_box.setAttribute('src','image/preview'+cur_box_flag+'.png');
            cur_box.setAttribute('src','image/preview'+(cur_box_flag-2)+'.png');
            next_box.setAttribute('src','image/preview'+(cur_box_flag-1)+'.png');
            cur_box_flag=0;
            break;
        default:
            break;
    }
}

function cng_pic_l() {
    cur_box_flag--;
    if(cur_box_flag<1){
        cur_box_flag=3;
    }
    switch (cur_box_flag) {
        case 1:
            pre_box.setAttribute('src','image/preview'+cur_box_flag+'.png');
            cur_box.setAttribute('src','image/preview'+(cur_box_flag+1)+'.png');
            next_box.setAttribute('src','image/preview'+(cur_box_flag+2)+'.png');
            cur_box_flag=4;
            break;

        case 2:
            pre_box.setAttribute('src','image/preview'+cur_box_flag+'.png');
            cur_box.setAttribute('src','image/preview'+(cur_box_flag+1)+'.png');
            next_box.setAttribute('src','image/preview'+(cur_box_flag-1)+'.png');
            break;

        case 3:
            pre_box.setAttribute('src','image/preview'+cur_box_flag+'.png');
            cur_box.setAttribute('src','image/preview'+(cur_box_flag-2)+'.png');
            next_box.setAttribute('src','image/preview'+(cur_box_flag-1)+'.png');
            break;
        default:
            break;
    }
}




function change_menu_flag() {
    menu_flag = 1;
}




/**
 * 
 * @brief 현재 배너 높이를 받아 그 이상 scroll down 되면 background-color 변경
 * @author JJH
 * @param height 현재 화면에서 배너 높이
 * @see . 반응형 적용시 banner height가 변경되어 높이값에 대응하기 위해 작성함
 * 
 */
function change_nav(height) {
    if(window.scrollY<height-header_height){
        header.style.background = 'none';
    } else if (window.scrollY>height-header_height){
        header.style.backgroundColor = '#532480';
    }
}
