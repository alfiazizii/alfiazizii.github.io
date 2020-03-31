// Variable untuk menimpalkan sambutan
var date = new Date();
var jam = date.getHours();
var anniv_date = date.getDate();
var anniv_month = date.getMonth() + 1;
// var sambutan;

// Ganti sambutan bedasarkan waktu
// if (jam < 12) {
//   sambutan = `${nama}`;
// } else if (jam >= 17 && jam <= 24) {
//   sambutan = `${nama}`;
// } else if (jam >= 12 && jam <= 17) {
//   sambutan = `Good Siang, ${nama}❣`;
// }

// Ganti background berdasarkan waktu
if (jam > 0 && jam < 18) {
  document.body.style.background = "url('images/day-sky.jpg')";
} else {
  document.body.style.background = "url('images/night-sky.jpg')";
}

if (anniv_date == 12 && anniv_month == 5) {
  document.body.style.background = "url('images/anniv-img.jpg')";
}

// if (anniv_date && anniv_month) {
//   var typed = new Typed("#typed", {
//     strings: ["Happy Anniversary", "Wwwww", "Jaadada"],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true
//   });
// }

if (anniv_date == 12 && anniv_month == 5) {
  var typed = new Typed("#typed", {
    strings: [
      "Happy anniversary buat kita",
      "24 months and still counting",
      "I love you!!"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
} else if (jam > 0 && jam <= 4) {
  var typed = new Typed("#typed", {
    strings: [
      "Tidur lagi tidur!",
      "Jangan begadang aja!",
      "Jaga kesehatan kamu!"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
} else if (jam >= 5 && jam < 11) {
  var typed = new Typed("#typed", {
    strings: ["Good morning Atha", "Have a nice day", "Stay safe yaa!"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
} else if (jam > 12 && jam <= 17) {
  var typed = new Typed("#typed", {
    strings: [
      "Hei kamu jangan telat makannya yaa",
      "Tetap jaga kesahatan!",
      "Jangan lewatkan sholatnya"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
} else if (jam >= 18 && jam <= 24) {
  var typed = new Typed("#typed", {
    strings: [
      "Gimana harimu?",
      "Semoga menyenangkan seperti biasanya ya",
      "Makan dulu sebelum istirahat",
      "Kebiasaan suka ketiduran"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
}

// Particle
particlesJS("particles-js", {
  particles: {
    number: {
      value: 455,
      density: {
        enable: true,
        value_area: 789.1476416322727
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 9,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
