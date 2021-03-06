"use strict";

//// 스크롤 시 header 높이 줄이기
// - scroll이 32px 만큼 내려왔을 때
// - header 의 높이가 줄어든다. 얼만큼? 28px 정도?
// - with transition

//// 스크롤이 home 화면을 지나면 footer 생성 (누르면 화면이 한 페이지만큼 올라간다)
// - Scroll 위치(a), Viewport 높이(b)
// - a >= b 일 때 top button 생성

//// 스크롤 시 home 화면 왼쪽으로 이동

const body = document.body;

const home = document.getElementById("home");
const header = document.getElementById("header");
const about = document.getElementById("about");

const footer = document.getElementById("footer");
const topButton = document.querySelector(".top-button");
const headerH = header.offsetHeight;

const SHRINK_CLASSNAME = "shrink";

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrollLocation = window.scrollY;
  const windowHeight = window.innerHeight;
  if (scrollLocation > 100) {
    header.classList.add(SHRINK_CLASSNAME);
  } else {
    header.classList.remove(SHRINK_CLASSNAME);
  }
  if (scrollLocation >= windowHeight) {
    topButton.classList.add("showing");
  } else {
    topButton.classList.remove("showing");
  }

  home.style.left = `-${scrollLocation * 0.3}px`;
}

topButton.addEventListener("click", goToTop);

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//// nav바 메뉴 클릭 시 해당 화면으로 이동
const navMenu = document.querySelectorAll(".navbar__menu__item");

navMenu.forEach((item) => {
  item.addEventListener("click", handleClickItem);

  function handleClickItem(e) {
    const itemName = e.target.dataset.itemname; // click 한  아이

    const sectionTop = document.querySelector(
      `section[data-sectionName="${itemName}"]`
    ).offsetTop; // 해당 section의 top 높이

    window.scrollTo({ top: `${sectionTop}`, behavior: "smooth" });
  }
});

// Experience에서 설명 + 사진 부분 slider
//// Add transition effect

// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// const imagesContainer = document.querySelector(
//   ".exp__images-container"
// ).children;
// const imageLength = imagesContainer.length;

// let index = 0;

// prevBtn.addEventListener("click", () => {
//   nextToImage("prev");
// });

// nextBtn.addEventListener("click", () => {
//   nextToImage("next");
// });

// function nextToImage(whichBtn) {
//   if (whichBtn === "prev") {
//     // 누른게 prev 버튼이라면
//     index--;
//     if (index < 0) {
//       // 맨 처음 이미지라면 맨 뒤 이미지로 복귀
//       index = imageLength - 1;
//     }
//   } else {
//     // 누른게 next 버튼이라면
//     index++;
//     if (index > imageLength - 1) {
//       // 맨 마지막 이미지라면 맨 처음 이미지로 복귀
//       index = 0;
//     }
//   }
//   for (let i = 0; i < imageLength; i++) {
//     imagesContainer[i].classList.add("hide");
//   }
//   imagesContainer[index].classList.remove("hide");
// }
