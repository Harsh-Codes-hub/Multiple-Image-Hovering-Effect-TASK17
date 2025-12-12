const areaEls = document.querySelectorAll(".area");

areaEls.forEach((elem) => {
  const circle = elem.querySelector("img");

  const events = {
    mouseenter() {
      elem.style.borderBottomColor = "var(--text)";
      Object.assign(circle.style, {
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)",
      });
    },
    mousemove(e) {
      Object.assign(circle.style, {
        left: `${e.offsetX}px`,
        top: `${e.offsetY}px`,
      });
    },
    mouseleave() {
      elem.style.borderBottomColor = "var(--border)";
      Object.assign(circle.style, {
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0)",
      });
    },
  };

  for (const event in events) {
    elem.addEventListener(event, events[event]);
  }
});