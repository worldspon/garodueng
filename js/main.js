const header = document.querySelector('header');
const header_bg = document.querySelector('.header_bg');
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
var cur_box_flag = 3; // preview box에 표시될 img 갯수


const faq_btn = document.querySelectorAll(".faqs_card");
const faq_img = document.querySelectorAll('.faq_btn_img');
const faqs_content = document.querySelectorAll('.faqs_content');
var fqas_index = 0;





// scroll 이동시 nav background-color 변경
window.addEventListener('scroll', function(){
    banner_height = banner.clientHeight; // banner 높이값 get
    change_nav(banner_height);
});






// fqas content box display 초기화
faqs_content.forEach(l => {
    l.style.display="none";
});






// menu 버튼 클릭시 숨김 및 활성화
side_btn1.addEventListener('click',function(){;
    side_menu.style.marginRight = 0;
    setTimeout(change_menu_flag, 1);
});

side_btn2.addEventListener('click',function(){;
    side_menu.style.marginRight = -160+'px';
    menu_flag=0;
});


// menu 활성화 상태에서 다른 영역 클릭 및 메뉴 이동시 메뉴 비활성화
window.addEventListener('click',function(){
    if(menu_flag){
        side_menu.style.marginRight = -160+'px';
        menu_flag=0;
    }
});







//화살표 버튼 클릭시 preview img 이동
arrow_r.addEventListener('click',function(){
    cng_pic_r();
});

arrow_l.addEventListener('click',function(){
    cng_pic_l();
});







// faq btn click시 해당 index와 같은 faq content 활성화, img 변경
faq_btn.forEach(e => {
    e.addEventListener('click',function(){
        faqs_index = Array.from(faq_btn).indexOf(this);
        
        faqs_content.forEach((val, index, l) => {
            if(faqs_index!=index){
                l[index].style.display="none";
            }
        });

        // 이미 활성화 상태이면 비활성화
        if(faqs_content[faqs_index].style.display=='none'){
            faqs_content[faqs_index].style.display='block';
            faq_img[faqs_index].setAttribute('src','image/up_arrow.png');
        } else if(faqs_content[faqs_index].style.display=='block'){
            faqs_content[faqs_index].style.display='none';
            faq_img[faqs_index].setAttribute('src','image/down_arrow.png');
        }
    });
});









/**
 * 
 * @brief arrow_r button click시 preview img 이동
 * @author JJH
 * @see . img 갯수가 증가하면 cur_box_flag와 내부 함수를 수정해아한다.
 * @todo img 증가시 함수 수정
 * @deprecated 삭제예정
 * 
 */
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





/**
 * 
 * @brief arrow_l button click시 preview img 이동
 * @author JJH
 * @see . img 갯수가 증가하면 cur_box_flag와 내부 함수를 수정해아한다.
 * @todo img 증가시 함수 수정
 * @deprecated 삭제예정
 * 
 */
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



/**
 * 
 * @brief side_menu 제어를 위해 settimeout에 들어가는 함수
 * @author JJH
 * @see . window click시 비활성화를 위한 menu flag 변경 함수, settimeout과 함께 써야함
 * 
 */
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
    if(window.scrollY<10){
        header_bg.style.display="none"
    }else if(window.scrollY<height-header_height){
        header.style.background = 'none';
        header_bg.style.display="block"
    } else if (window.scrollY>height-header_height){
        header_bg.style.display="none"
        header.style.backgroundColor = '#532480';
    }
}
