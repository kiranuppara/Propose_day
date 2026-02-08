const febHolidays = [
  "💞 Ammu Kosam Naa Hrudayam Nundi Raasina Prema Kavitha 💞",

  "Dear Ammu…",
  "Please feel this… naa gundello nundi vachina prema 💓",
  "Idi prema oka cycle kaadu…",
  "Idi naa jeevitham lo nadiche oka beautiful journey ❤️",
  "Dayachesi idi whole heart tho feel cheyyi 🥺💞",

  "Dost kuda nuvvu…",
  "Prema kuda nuvvu 😊",
  "Okka nuvvu chalu…",
  "Velamandi kanna ekkuva nuvvu 🤩",
  "Dukham lo naa dhairyam nuvvu…",
  "Santosham lo naa navvu nuvvu 🤨✨",

  "Naa jeevitha safaram lo",
  "Naa life ki meaning nuvvu ❤",
  "Shiddat tho premistunna ninnu…",
  "Forever… I love you ❤️",

  "You are my everything ✔",
  "You are my soulmate ✨💕",

  "And of course… wait Ammu 😍",
  "“My future wife” ani piliche roju kosam eduru chustunna 🤭💞",

  "Nenu eppudu nee pakkane untanu 🤞",
  "Distance unna kuda, naa gundello nee place maaradu 🥰",
  "I promise… Ninnu eppudu cheat cheyyanu ❤️",

  "Nuvvu prettiest… cutest… funniest…",
  "Sweetest girl alive 🤞✍",
  "You are perfect 😍",

  "Ninnu kalisaka nenu happiest man ayyanu 🥰",
  "Devudiki rojanta thanks cheptha ❤️🙏",

  "Nee happiness kosam naa best try chestha 🥺💞",
  "Eppudu lonely feel avvaku Ammu 💓",

  "Nuvvu naa life lo most special person 🥰",
  "I don’t want to lose you 😒",
  "I don’t want anyone else 🥰",

  "Nee kanna better evaru leru ❤️",
  "You’re the best, Ammu 💖",

  "Online moments… offline memories… 💓",
  "Anni treasure laanti vi",

  "Konni kashtalu vachayi 😢",
  "Manam anni overcome chesam 🥰",
  "Nuvvu naa life lo chala important ❤️",

  "Ee love cycle antha nee kosame 😘",
  "My unconditional love 💖",

  "Please care chesko Ammu ❤",

  "Nenu binary love lo unna —",
  "Only ‘1’ nuvvu 💕",
  "Migatha antha ‘0’ 😍",

  "Biggest blessing ❤️",

  "💙 Naa Nijamaina Manasu Maata 💙",

  "Nenu mistakes chesanu 😔",
  "Kopam lo ninnu hurt chesanu 💔",

  "Work stress… Financial tension… 😞",

  "Adi naa weakness 🥺",
  "Nuvvu naa strength 💞",

  "Kopam tarvata regret 😢",

  "Nuvvu naa backbone 💪💞",

  "Naa worst time lo kuda pakkane undavu 🥹❤️",

  "Nenu maaradaniki try chestunna 💪",

  "Naa world antha nuvve ❤️♾️",

  "💖 Last but Not Least… 💖",

  "You are the love of my life ❤️",
  "Naa praanam lo sagam nuvvu 💞",
  "Naa future nuvvu ✨",

  "I love you so much Ammu ❤️💋",
  "Forever and Always ♾️💞"
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
  


