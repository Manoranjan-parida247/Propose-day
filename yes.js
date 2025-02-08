const febHolidays = [
  "You're the best part of my life.",
  "No matter what happens, I'm always with you.",
  "You're my closest friend and my greatest love.",
  "Life feels more meaningful with you by my side.",
  "Through every high and low, I'll stand by you.",
  "You make every moment special just by being in it.",
  "I respect, cherish, and love you with all my heart.",
  "No distance can change what we mean to each other.",
  "You’re my constant, my peace, and my home.",
  "Every day with you is a beautiful blessing.",
  "I don’t need perfection, I just need you.",
  "Your happiness matters the most to me.",
  "You are my heart’s safest place.",
  "Loving you is the easiest and most beautiful thing I do.",
  "You're not just my love; you're my partner in everything.",
  "I admire the person you are and the kindness in your heart.",
  "You bring warmth and joy into my life in ways words can't express.",
  "I promise to always support you, encourage you, and grow with you.",
  "I never want to take you for granted, because you're the most precious part of my life.",
  "Loving you has been the greatest journey of my life.",
  "With you, every ordinary moment feels extraordinary.",
  "I don’t love you just for who you are; I love you for how you make me feel.",
  "You are my today, my tomorrow, and every moment in between.",
  "I hope I can be as much of a blessing in your life as you are in mine.",
  "I love the way you think, the way you care, and the way you love.",
  "No matter how life changes, my love and respect for you will never fade.",
  "You are the reason I believe in love in its purest form.",
  "I don't just love you; I appreciate you, and I admire you.",
  "Even in silence, I feel connected to you.",
  "You make life’s uncertainties feel like an adventure rather than a fear.",
  "Every love story is special, but ours is my favorite.",
  "Your presence in my life is a gift I’ll always treasure.",
  "I don’t need grand gestures, just your hand in mine.",
  "Thank you for being you. Just you. That’s all I’ll ever need."
];

  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  