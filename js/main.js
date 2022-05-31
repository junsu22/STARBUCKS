//css의 한계 돋보기 움직임이 부자연 스러워 js 추가
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')
//.search input 앞에서 search 를 이미 찾았기 때문에 효율적으로 하기위해 .search 생략

searchEl.addEventListener('click', function () { 
// 이벤트 추가 logic
// searchEl을 클릭하면 어떤 익명의 함수가 실행이 된다.   
    
searchInputEl.focus();
})
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder' ,'통합검색')

})
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
 
// document : HTML 자체로 이해
window.addEventListener('scroll', _.throttle(function () {
    // 윈도우 개체 보고있는 화면 으로이해
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // badgeEl.style.display ='none'
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션) 
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
            // display:서서히 흐려지면서 요소가 제거되도록
        })
        //버튼 보이기
        gsap.to('#to-top', .2, {
          x : 0
        });

    } else {
        //배지 보이기 
        // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
        });
        //버튼 숨기기 !
        gsap.to('#to-top', .2, {
          x : 100
        });
    }
}, 300));
//_.throttle (함수, 시간)
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo : 0 
  });
})
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
    // 각 요소들을 순서대로(delay) 보여지게 함!
    //gsap.to (요소 , 지속시간 , 옵션)
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7 , 1.4, 2.1 ,2.7
        opacity: 1
    });
});

// new Swipper (선택자 , 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    //autoplay : ture
    delay: 1500 //  슬라이드 바뀜 시간 
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
    // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,  //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
     {//옵션
    y: size,
    repeat:-1,
    // y축으로 이동
    yoyo: true,
    // yoyo 다시 뒤로 돌아가는.
    ease: Power1.easeInOut,
    delay:random(0, delay)
  });
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5 , 15)
floatingObject('.floating3', 1.5 , 20)

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement : spyEl,        // 보여짐 여부를 감시할 요소를 지정

      triggerHook : .8 
    })
    .setClassToggle(spyEl,'show') 
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022
