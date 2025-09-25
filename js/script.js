document.addEventListener(`DOMContentLoaded`, function () {
  var menuSwiper = new Swiper(".menu_Swiper", {
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var bannerSwiper = new Swiper(".banner_Swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
  });

  var autoSwiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 10000,
    spaceBetween: 16,
  });

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

      for (const li of submenuTab) {
        li.addEventListener("click", function (event) {
          const subMenu = document.querySelectorAll(".sub_menu_box");
          const tab = this.getAttribute("data-tab");
          const changeTab = document.querySelector(`#${tab}`);
          const blackBg = document.querySelector(".main_menu_btn");

          event.stopPropagation();

          for (const tabContent of subMenu) {
            tabContent.classList.remove("active");
          }
          for (const siblings of submenuTab) {
            siblings.classList.remove("active");
          }

          this.classList.add("active");
          changeTab.classList.add("active");
          blackBg.classList.add("active");
        });
      }

      blackBg.addEventListener("click", function () {
        const subMenu = document.querySelectorAll(".sub_menu_box");

        for (const box of subMenu) {
          box.classList.remove("active");
        }
        for (const li of submenuTab) {
          li.classList.remove("active");
        }
        blackBg.classList.remove("active");
      });

      document.querySelectorAll(".sub_menu_box").forEach((sub) => {
        sub.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      });
    });
  }

  let responsiveSwipers = [];

  function initResponsiveSwiper() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1050 && responsiveSwipers.length === 0) {
      const selectors = [".cardbox1_Swiper", ".cardbox2_Swiper"];
      selectors.forEach((sel) => {
        const el = document.querySelector(sel);
        if (el) {
          const swiper = new Swiper(el, {
            spaceBetween: 16,

            pagination: {
              el: el.querySelector(".swiper-pagination"),
              clickable: true,
            },
          });
          responsiveSwipers.push(swiper);
        }
      });
    }

    // PC(1050px 이상) → 스와이퍼 제거
    else if (windowWidth >= 1050 && responsiveSwipers.length > 0) {
      responsiveSwipers.forEach((sw) => sw.destroy(true, true));
      responsiveSwipers = [];
    }
  }

  initResponsiveSwiper();

  window.addEventListener("resize", () => {
    initResponsiveSwiper();
  });

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

  // 햄버거버튼 내의 탭메뉴

  const innerBtn = document.querySelectorAll(`.hamburger_btn .main .title`);
  for (btn of innerBtn) {
    btn.addEventListener(`click`, function () {
      const parent = this.parentNode;

      parent.classList.toggle(`on`);

      for (const child of parent.parentNode.children) {
        if (child !== parent) {
          child.classList.remove(`on`);
        }
      }
    });
  }
}); //end

// 수정4차;
