let isUpScrolling = false;
let lastScrollTop = window.pageYOffset;
const scrollLogic = (setStyles) => {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    if (!isUpScrolling) {
      isUpScrolling = true;
      // down animation here
      // console.log("down", setStyles);
      setStyles({ top: 0 });
    }
  } else {
    if (isUpScrolling) {
      isUpScrolling = false;
      // up animation here
      // console.log("up");
      setStyles({ top: "-5.2rem" });
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

export default scrollLogic;

// gsap.to(headerClass, {
//   top: 0,
//   duration: 0.7,
// });
