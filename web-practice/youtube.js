const hamburgerIcon = document.querySelector(".hamburger_icon");
const sideBar = document.querySelector(".side_bar");
const scrollBarHide = document.querySelector(".scroll_bar_hide");
const Block = document.querySelector(".block");
const blockSpan = document.querySelector(".block span");
const blockDiv = document.querySelector(".block div");
const Hr = document.querySelector("hr");
const H4 = document.querySelector("h4");
const sideBarFooter = document.querySelector(".side_bar_footer");
const Home = document.querySelector(".home");
const Shorts = document.querySelector(".Shorts");
const Subscribe = document.querySelector(".subscribe");
const Locker = document.querySelector(".locker");
const sideBarContainer = document.querySelector(".side_bar_container");
const Contents = document.querySelector(".contents");
const scrollContainer = document.querySelector(".icon_selector");

hamburgerIcon.addEventListener("click", function () {
  sideBar.style.cssText = "width: 72px; flex-direction: row; overflow: hidden;";
  scrollBarHide.style.cssText = "display: none;";
  Block.style.cssText = "display: none; padding: 0; margin: 0;";
  blockSpan.style.cssText = "font-size: 11px;margin: 0;";
  blockDiv.style.cssText = "margin-bottom: 4px;";
  Hr.style.cssText = "display: none;";
  H4.style.cssText = "display: none;";
  sideBarFooter.style.cssText = "display: none;";
  Home.style.cssText =
    "display: flex;flex-direction: column;justify-content: center;align-items: center;width: 64px;height: 70px;";
  Shorts.style.cssText =
    "display: flex;flex-direction: column;justify-content: center;align-items: center;width: 64px;height: 70px;";
  Subscribe.style.cssText =
    "display: flex;flex-direction: column;justify-content: center;align-items: center;width: 64px;height: 70px;";
  sideBarContainer.style.cssText =
    "display: flex;flex-direction: column;justify-content: center;align-items: center;width: 64px;height: 70px;";
  Contents.style.cssText = "padding: 56px 0 0 80px;";
});

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();

  scrollContainer.scrollLeft += evt.deltaY;
});
