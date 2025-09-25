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
      disableOnInteraction: false, // 이거 안 넣으면 멈추는 경우 있음
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

      // changeTab.addEventListener(`click`, function () {
      //   this.classList.remove(`active`);
      //   // li.classList.remove(`active`);
      //   blackBg.classList.remove(`active`);
      // });

      // 원래 코드임!!! 25.9.25
      //   li.addEventListener(`click`, function (event) {
      //     console.log(event.target);

      //     if (event.target == event.currentTarget) {
      //       li.classList.remove(`active`);
      //       changeTab.classList.remove(`active`);
      //       blackBg.classList.remove(`active`);
      //     }
      //   });

      //   blackBg.addEventListener(`click`, function (event) {
      //     console.log(event.target);

      //     if (event.target == event.currentTarget) {
      //       this.classList.remove(`active`);
      //       li.classList.remove(`active`);
      //       changeTab.classList.remove(`active`);
      //     }
      //   });

      //수정코드
      for (const li of submenuTab) {
        li.addEventListener("click", function (event) {
          const subMenu = document.querySelectorAll(".sub_menu_box");
          const tab = this.getAttribute("data-tab");
          const changeTab = document.querySelector(`#${tab}`);
          const blackBg = document.querySelector(".main_menu_btn");

          // 이벤트 버블링 방지 (li 클릭 시 부모로 전달 X)
          event.stopPropagation();

          // 모든 메뉴 닫기
          for (const tabContent of subMenu) {
            tabContent.classList.remove("active");
          }
          for (const siblings of submenuTab) {
            siblings.classList.remove("active");
          }

          // 현재 클릭된 메뉴 열기
          this.classList.add("active");
          changeTab.classList.add("active");
          blackBg.classList.add("active");
        });
      }

      // 배경 클릭 시 전체 닫기
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

      // 서브메뉴 내부 클릭 시 메뉴 유지
      document.querySelectorAll(".sub_menu_box").forEach((sub) => {
        sub.addEventListener("click", function (event) {
          event.stopPropagation(); // 내부 클릭 → 부모(li)까지 전달 안 함
        });
      });
    });
  }

  // sec_3 반응형 스와이퍼 추가
  // 반응형 사이즈에 따라 스와이퍼 초기화 또는 제거
  // 스와이퍼를 제거할때 그냥 반응형 사이즈만 설정하고 제거할 경우 스와이퍼 변수는 여전히 객체라는 존재로 남게된다

  // 스와이퍼 변수선언
  let responsiveSwipers = []; // 두 개를 배열에 담아 관리

  function initResponsiveSwiper() {
    const windowWidth = window.innerWidth;

    // 모바일(1050px 이하) → 스와이퍼 실행
    if (windowWidth < 1050 && responsiveSwipers.length === 0) {
      const selectors = [".cardbox1_Swiper", ".cardbox2_Swiper"];
      selectors.forEach((sel) => {
        const el = document.querySelector(sel);
        if (el) {
          // 각 컨테이너 안의 pagination만 참조 (충돌 방지)
          const swiper = new Swiper(el, {
            spaceBetween: 16,
            // slidesPerView: 1,

            pagination: {
              el: el.querySelector(".swiper-pagination"),
              clickable: true,
            },
          });
          responsiveSwipers.push(swiper); // 배열에 보관
        }
      });
    }

    // PC(1050px 이상) → 스와이퍼 제거
    else if (windowWidth >= 1050 && responsiveSwipers.length > 0) {
      responsiveSwipers.forEach((sw) => sw.destroy(true, true)); // 전부 삭제
      responsiveSwipers = []; // 배열 초기화
    }
  }

  // 처음 실행
  initResponsiveSwiper();

  // 리사이즈 시 다시 실행
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

  // const innerBtn = document.querySelectorAll(`.hamburger_btn .main .title`);
  // for (btn of innerBtn) {
  //   btn.addEventListener(`click`, function () {
  //     const parent = this.parentNode;

  //     // 현재 클릭된 버튼의 부모 요소에 `open` 클래스 추가
  //     parent.classList.toggle(`on`);

  //     // 부모 요소의 모든 자식요소들을 순회하면서 `open` 클래스 제거
  //     for (const child of parent.parentNode.children) {
  //       if (child !== parent) {
  //         child.classList.remove(`open`);
  //       }
  //     }
  //   });
  // }

  const innerBtn = document.querySelectorAll(`.hamburger_btn .main .title`);
  for (btn of innerBtn) {
    btn.addEventListener(`click`, function () {
      const parent = this.parentNode;

      // 현재 클릭된 버튼의 부모 요소에 `open` 클래스 추가
      parent.classList.toggle(`on`);

      // 부모 요소의 모든 자식요소들을 순회하면서 `open` 클래스 제거
      for (const child of parent.parentNode.children) {
        if (child !== parent) {
          child.classList.remove(`on`);
          // open 아니고 on 으로 써야하삼
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

// 수정4차;
