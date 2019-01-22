var header = document.querySelector('header');
var banner = document.getElementById('banner');
var banner_height=0;

var side_menu = document.querySelector('.side_menu');
var side_btn1 = document.querySelector('.side_btn1');
var side_btn2 = document.querySelector('.side_btn2');

side_btn1.addEventListener('click',function(){
    side_menu.style.marginRight = 0;
});

side_btn2.addEventListener('click',function(){
    side_menu.style.marginRight = -160+'px';
});





// scroll 이동시 nav background-color 변경
window.addEventListener('scroll', function(){
    banner_height = banner.clientHeight; // banner 높이값 get
    change_nav(banner_height);
});
















/**
 * 
 * @brief 현재 배너 높이를 받아 그 이상 scroll down 되면 background-color 변경
 * @author JJH
 * @param height 현재 화면에서 배너 높이
 * @see . 반응형 적용시 banner height가 변경되어 높이값에 대응하기 위해 작성함
 * 
 */
function change_nav(height) {
    if(window.scrollY<height){
        header.style.background = 'none';
    } else if (window.scrollY>height){
        header.style.backgroundColor = '#532480';
    }
}
