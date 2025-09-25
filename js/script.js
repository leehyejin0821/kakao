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
  // const applyByWidth = () => {
  //   const windowWidth = window.innerWidth;

  //   if (windowWidth <= 1050) {
  //     var swiper = new Swiper(".cardbox2_Swiper", {
  //       pagination: {
  //         el: ".swiper-pagination",
  //       },
  //     });

  //     var swiper = new Swiper(".cardbox1_Swiper", {
  //       pagination: {
  //         el: ".swiper-pagination",
  //       },
  //     });
  //   }
  // };

  // 햄버거 버튼 클릭이벤트
  const hamburgerBtn = document.querySelector(`.icon_box .icon4`);
  const hamburgerContent = document.querySelector(`.hamburger_btn`);
  const hamburgerClose = document.querySelector(
    `.hamburger_btn .top_box .icon3`
  );

  hamburgerBtn.addEventListener(`click`, function () {
    hamburgerContent.classList.add(`on`);
  });

  hamburgerClose.addEventListener(`click`, function () {
    hamburgerContent.classList.remove(`on`);
  });

  // const windowWidth = window.innerWidth;

  // const widthMobile = () => {
  //   hamburgerBtn.addEventListener(`click`, function () {
  //     hamburgerContent.classList.add(`on`);
  //   });

  //   hamburgerClose.addEventListener(`click`, function () {
  //     hamburgerContent.classList.remove(`on`);
  //   });
  // };

  // if (windowWidth <= 1050) {
  //   widthMobile();
  // } else {
  // }

  // 햄버거버튼 내의 탭메뉴

  const mainIntro = document.querySelector(`.hamburger_btn .main_intro`);
  const mainTech = document.querySelector(`.hamburger_btn .main_tech`);
  const mainPromise = document.querySelector(`.hamburger_btn .main_promise`);
  const mainNews = document.querySelector(`.hamburger_btn .main_news`);
  const mainCustomer = document.querySelector(`.hamburger_btn .main_customer`);

  const subIntro = document.querySelector(`.main_intro .sub_box_intro`);
  const subTech = document.querySelector(`.main_tech .sub_box_tech`);
  const subPromise = document.querySelector(`.main_promise .sub_box_promise`);
  const subNews = document.querySelector(`.main_news .sub_box_news`);
  const subCustomer = document.querySelector(
    `.main_customer .sub_box_customer`
  );

  const innerBtn = document.querySelectorAll(`.hamburger_btn .main .title`);
  for (btn of innerBtn) {
    btn.addEventListener(`click`, function () {
      const parent = this.parentNode;

      // 현재 클릭된 버튼의 부모 요소에 `open` 클래스 추가
      parent.classList.toggle(`on`);

      // 부모 요소의 모든 자식요소들을 순회하면서 `open` 클래스 제거
      for (const child of parent.parentNode.children) {
        if (child !== parent) {
          child.classList.remove(`open`);
        }
      }
    });
  }

  // mainIntro.addEventListener(`click`, function () {
  //   subIntro.classList.toggle(`on`);
  // });
  // mainTech.addEventListener(`click`, function () {
  //   subTech.classList.toggle(`on`);
  // });
  // mainPromise.addEventListener(`click`, function () {
  //   subPromise.classList.toggle(`on`);
  // });
  // mainNews.addEventListener(`click`, function () {
  //   subNews.classList.toggle(`on`);
  // });
  // mainCustomer.addEventListener(`click`, function () {
  //   subCustomer.classList.toggle(`on`);
  // });

  // mainIntro.addEventListener(`click`, function (event) {
  //   if (event.target == event.currentTarget) {
  //     subIntro.classList.remove(`on`);
  //   }
  // });
  // mainTech.addEventListener(`click`, function (event) {
  //   if (event.target == event.currentTarget) {
  //     subTech.classList.remove(`on`);
  //   }
  // });
  // mainPromise.addEventListener(`click`, function (event) {
  //   if (event.target == event.currentTarget) {
  //     subPromise.classList.remove(`on`);
  //   }
  // });
  // mainNews.addEventListener(`click`, function (event) {
  //   if (event.target == event.currentTarget) {
  //     subNews.classList.remove(`on`);
  //   }
  // });
  // mainCustomer.addEventListener(`click`, function (event) {
  //   if (event.target == event.currentTarget) {
  //     subCustomer.classList.remove(`on`);
  //   }
  // });
}); //end

// 수정1차;
