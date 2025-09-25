document.addEventListener(`DOMContentLoaded`, function () {
  // 검색버튼 클릭이벤트
  const searchBtn = document.querySelector(`.header_box .icon_box .icon1`);
  const searchContent = document.querySelector(`.search_btn`);
  const closeBtn = document.querySelector(`.search_btn .top_box .close_btn`);

  searchBtn.addEventListener(`click`, function () {
    searchContent.classList.add(`on`);
  });

  closeBtn.addEventListener(`click`, function () {
    console.log(`hh`);
    searchContent.classList.remove(`on`);
  });

  // 메인메뉴 클릭이벤트
  const submenuTab = document.querySelectorAll(`.main_menu li`);

  for (const li of submenuTab) {
    li.addEventListener(`click`, function () {
      const subMenu = document.querySelectorAll(`.sub_menu_box`);

      for (const tabContent of subMenu) {
        tabContent.classList.remove(`active`);
      }

      const tab = this.getAttribute(`data-tab`);
      const changeTab = document.querySelector(`#${tab}`);
      const blackBg = document.querySelector(`.main_menu_btn`);

      changeTab.classList.add(`active`);
      li.classList.toggle(`active`);
      blackBg.classList.add(`active`);

      for (const siblings of submenuTab) {
        if (siblings !== this) {
          siblings.classList.remove(`active`);
        }
      }

      // changeTab.addEventListener(`click`, function () {
      //   this.classList.remove(`active`);
      //   // li.classList.remove(`active`);
      //   blackBg.classList.remove(`active`);
      // });

      li.addEventListener(`click`, function (event) {
        console.log(event.target);

        if (event.target == event.currentTarget) {
          li.classList.remove(`active`);
          changeTab.classList.remove(`active`);
          blackBg.classList.remove(`active`);
        }
      });

      blackBg.addEventListener(`click`, function (event) {
        console.log(event.target);

        if (event.target == event.currentTarget) {
          this.classList.remove(`active`);
          li.classList.remove(`active`);
          changeTab.classList.remove(`active`);
        }
      });
    });
  }

  // sec_3 반응형 스와이퍼 추가
  const applyByWidth = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1050) {
      var swiper = new Swiper(".cardbox2_Swiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

      var swiper = new Swiper(".cardbox1_Swiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  };

  // 햄버거 버튼 클릭이벤트
  const hamburgerBtn = document.querySelector(`.icon_box .icon4`);
  const hamburgerContent = document.querySelector(`.hamburger_btn`);

  hamburgerBtn.addEventListener(`click`, function () {});
}); //end
