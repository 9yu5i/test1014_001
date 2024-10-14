$(document).ready(function() {

    // Music play/pause
    $(".play").click(function(){
        $(".pause").show();
        $(".play").hide();
        $(".bar").css("animation-play-state", "paused");
    });

    $(".pause").click(function(){
        $(".play").show();
        $(".pause").hide();
        $(".bar").css("animation-play-state", "running");
    });
  
     // 초기 설정: 첫 번째 탭과 내용만 표시, 나머지는 숨기기
     $(".aboutus-img li").hide();
     $(".aboutus-img li").eq(0).show(); // 첫 번째 내용만 보이게 설정
     $(".aboutus-tap-btn li").eq(0).addClass("active").css("opacity", "1"); // 첫 번째 탭 활성화 및 opacity: 1
     $(".aboutus-tap-btn li").not(":eq(0)").css("opacity", "0.26"); // 나머지 탭은 opacity: 0.26
 
     // 클릭 이벤트 핸들러
     $(".aboutus-tap-btn li").click(function() {
         // 탭 활성화 효과
         $(this).addClass("active").siblings().removeClass("active");
 
         // 탭 버튼 opacity 변경
         $(".aboutus-tap-btn li").css("opacity", "0.26"); // 모든 탭 opacity를 0.26으로 설정
         $(this).css("opacity", "1"); // 클릭된 탭은 opacity를 1로 설정
 
         // 탭에 맞는 내용 표시
         var indexNum = $(this).index(); // 클릭된 탭의 인덱스 가져오기
         $(".aboutus-img li").eq(indexNum).fadeIn().siblings().hide(); // 해당 내용 보이기
     });
    
    // Swiper carousel
    var swiper = new Swiper(".my-carousel__swiper", {
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: ".my-carousel__control--next",
            prevEl: ".my-carousel__control--prev"
        },
        slidesPerView: 3,
        effect: "creative",
        creativeEffect: {
            perspective: true,
            limitProgress: 3,
            prev: {
                translate: ["-90%", "20%", -100],
                rotate: [0, 0, -20],
                origin: "bottom"
            },
            next: {
                translate: ["90%", "20%", -100],
                rotate: [0, 0, 20],
                origin: "bottom"
            }
        }
    });

    // Vertical banner function
    function verticalBanner($wrap, $list) {
        let wrapHeight;
        let listHeight;

        // 배너 리스트 복제 후 추가
        let $clone = $list.clone();
        $wrap.append($clone);

        function animateBanner() {
            // 배너 애니메이션 초기화
            if (wrapHeight != '') {
                $wrap.find('.list').css({ 'animation': 'none' });
                $wrap.find('.list').slice(2).remove();
            }

            // 배너 컨테이너와 리스트 아이템의 현재 높이 가져오기
            wrapHeight = $wrap.innerHeight();
            listHeight = $list.innerHeight();

            // 배너 속도 조절 부분
            const speed = $list.find('li').innerHeight() / 8;

            // 무한 반복을 위한 리스트 복제
            if (listHeight < wrapHeight) {
                const listCount = Math.ceil(wrapHeight * 2 / listHeight);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }

            // 수직 롤링 애니메이션 적용
            $wrap.find('.list').css({
                'animation': `${listHeight / speed}s linear infinite verticalRolling`
            });
        }

        // 초기 배너 설정
        animateBanner();

        // 마우스 이벤트 처리: 배너 롤링 일시 정지 및 재생
        $wrap.on({
            mouseenter: function() {
                $wrap.find('.list').css('animation-play-state', 'paused');
            },
            mouseleave: function() {
                $wrap.find('.list').css('animation-play-state', 'running');
            }
        });

        // 창 크기에 따른 반응형 처리
        $(window).on('resize', function() {
            animateBanner(); // 창 크기 변경 시 배너 롤링 재설정
        });
    }

    // 각 배너에 대해 verticalBanner 함수 적용
    const $wrap1 = $('.vertical_banner');
    const $list1 = $('.vertical_banner .list');
    verticalBanner($wrap1, $list1);

    const $wrap2 = $('.vertical_banner2');
    const $list2 = $('.vertical_banner2 .list');
    verticalBanner($wrap2, $list2);

    const $wrap3 = $('.vertical_banner3');
    const $list3 = $('.vertical_banner3 .list');
    verticalBanner($wrap3, $list3);

    //slogan mouse
    var cursor = document.querySelector('.blob');
var sloganSection = document.getElementById('slogan');

// 처음에는 .blob 요소를 숨깁니다.
cursor.style.display = 'none';

document.addEventListener('mousemove', function(e) {
  var rect = sloganSection.getBoundingClientRect();
  var x = e.clientX;
  var y = e.clientY;

  // 마우스가 #slogan 섹션 안에 있는지 확인
  if (
    x >= rect.left && 
    x <= rect.right && 
    y >= rect.top && 
    y <= rect.bottom
  ) {
    // .blob 요소를 보이게 하고 위치를 설정합니다.
    cursor.style.display = 'flex'; // 또는 'block'을 사용할 수 있습니다.
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  } else {
    // #slogan 밖으로 나가면 .blob 요소를 숨깁니다.
    cursor.style.display = 'none';
  }
});

   // Tab functionality
   $(".tab-buttons li").click(function() {
    var index = $(this).index();

    // Remove active class from all buttons and tab contents
    $(".tab-buttons li").removeClass("active");
    $(".tab-item").removeClass("active");

    // Add active class to the clicked button and corresponding tab content
    $(this).addClass("active");
    $(".tab-item").eq(index).addClass("active");
});

});
