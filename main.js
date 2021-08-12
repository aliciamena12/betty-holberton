
new fullpage('#fullPage', {
    anchors: ['page1', 'page2', 'page3', 'page4'],
    navigationTooltips: ['Main', 'Inicios', 'ENIAC', 'BINAC', 'UNIVAC', 'Reconocimientos', 'Curiosidades'],
    css3: true,
    scrollingSpeed: 1000,
    navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
    dragAndMove: true,
    dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
    controlArrows: false
});

new fullpage('#fullPage2', {
    anchors: ['page1', 'page2', 'page3', 'page4'],
    navigationTooltips: ['Betty Holberton', 'Evelyn Berezin', 'Margaret Hamilton', 'BINAC', 'UNIVAC', 'Reconocimientos', 'Curiosidades'],
    css3: true,
    scrollingSpeed: 1000,
    navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
    dragAndMove: true,
    dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
    controlArrows: false
});



var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else
      for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
          this.classList.toggle("is-active");
      }, false);
  });
}

var menu = document.querySelector('.hamburger');

function toggleMenu(event) {
  document.querySelector(".menuppal").classList.toggle("is_active");

}

function FunctionResize() {
  const  ancho = window.outerWidth;
  console.log(ancho);

  if (ancho < 920) {
  
      const  cls = document.getElementsByClassName("cont__header_hamburguer");
      for (var i = 0; i < cls.length; i++) {
          cls[i].removeAttribute("hidden");
      }

      const  cls2 = document.getElementsByClassName("navbar");
      for (var i = 0; i < cls2.length; i++) {
          cls2[i].setAttribute("hidden", true);
      }

  }
  
  if (ancho > 920){
      const  cls = document.getElementsByClassName("cont__header_hamburguer");
      for (var i = 0; i < cls.length; i++) {
          cls[i].setAttribute("hidden", true);
      }

      const  cls2 = document.getElementsByClassName("navbar");
      for (var i = 0; i < cls2.length; i++) {
          cls2[i].removeAttribute("hidden");
      }

  }


}



// ANIMACION

//let myPanel = document.getElementsByClassName("panel");
//let subpanel = document.getElementsByClassName("panel-container");

//myPanel.onmousemove = transformPanel;
//myPanel.onmouseenter = handleMouseEnter;
//myPanel.onmouseleave = handleMouseLeave;

let myPanel = document.getElementById("panel");
let subpanel = document.getElementById("panel-container");

myPanel.onmousemove = transformPanel;
myPanel.onmouseenter = handleMouseEnter;
myPanel.onmouseleave = handleMouseLeave;


let myPanel2 = document.getElementById("panel2");
let subpanel2 = document.getElementById("panel-container2");

myPanel2.onmousemove = transformPanel;
myPanel2.onmouseenter = handleMouseEnter;
myPanel2.onmouseleave = handleMouseLeave;


let mouseX, mouseY;

let transformAmount = 5;

function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
    const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

    subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter() {
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);
    subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
    subpanel.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);

    subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}
