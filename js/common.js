$(document).ready(function() {
  // Open menu
  $(".ham").click(function() {
    $(".gnb-wrap").addClass("active");
  });

  // Close menu
  $(".ham-close").click(function() {
    $(".gnb-wrap").removeClass("active");
  });

  //m-aboutus
  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.m-aboutus > li > a');
  
    accordionItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
  
        const parentLi = this.parentElement;
        const subMenu = parentLi.querySelector('.mdepth2');
        
        // 현재 클릭된 항목 외의 다른 모든 항목 닫기
        const allSubMenus = document.querySelectorAll('.mdepth2');
        allSubMenus.forEach(menu => {
          if (menu !== subMenu) {
            menu.classList.remove('active');
          }
        });
  
        // 현재 클릭된 항목 열고 닫기 토글
        subMenu.classList.toggle('active');
      });
    });
  });
  
});
