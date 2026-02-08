const febHolidays = [
  "Dear Ammu…",
  "Dost kuda nuvvu…",
  "Prema kuda nuvvu 😊",
  "Okka nuvvu chalu…",
  "Velamandi kanna ekkuva nuvvu 🤩",
  "Dukham lo naa dhairyam nuvvu…",
  "Santosham lo naa navvu nuvvu 🤨✨",

  "Naa life ki meaning nuvvu ❤",
  "Forever… I love you ❤️",
  "You are my everything ✔",
  "You are my soulmate ✨💕",

  "Oka roju ninnu ‘My wife’ ani piliche roju kosam eduru chustunna 🤭💞",
  "Nenu eppudu nee pakkane untanu 🤞",
  "Distance unna kuda, naa gundello nee place maaradu 🥰",
  "I promise… ninnu eppudu cheat cheyyanu ❤️",

  "Nuvvu prettiest… cutest… funniest… sweetest girl alive 🤞✍",
  "Okka maata lo cheppalante… You are perfect 😍",

  "Ninnu kalisaka nenu nijanga happiest man ayyanu 🥰",
  "Naa life lo ninnu pampinanduku Devudiki rojanta thanks cheptha ❤️🙏",
  "Nee happiness kosam naa best try chestha 🥺💞",

  "Nuvvu naa life lo most special person 🥰",
  "Ninnu pogottukovalani naaku assalu ledu 😒",
  "And trust me… I don’t want anyone else 🥰",
  "Nee kanna better evaru leru ❤️",
  "You’re the best, Ammu 💖",

  "Good things jariginappudu first naa mind lo vachche peru… nee pere 🤨💞",

  "Manam kalisi gadipina moments… memories… anni naa hrudayam lo treasure laanti vi 💓",

  "Konni kashtalu vachayi 😢",
  "Kani manam anni overcome chesam 🥰",
  "Adi naaku ardham chesindi — nuvvu naa life lo entha important oo ❤️",

  "Nenu binary love lo unna — naa life lo only ‘1’ nuvvu 💕",
  "Migatha antha ‘0’ 😍",

  "💙 Naa Nijamaina Manasu Maata 💙",

  "Ammu… nenu chala mistakes chesanu 😔",
  "Kopam vachinappudu ninnu hurt chesina moments unnayi 💔",

  "Work stress… Rapido pressure… financial tension… mental load…",
  "Ivanni kalisi naa kopam ga bayataki vastayi 😞",

  "Kani nijam cheppalante… adi nee meeda kaadu… adi naa weakness 🥺",
  "Nuvvu matram naa strength 💞",

  "Kopam vachina next minute nenu regret avutha 😢",
  "‘Enduku ila chesanu?’ ani naa gunde nannu adugutundi 💭💔",

  "Nuvvu lekapothe nenu ee roju ikkada undevadini kaadu ❤️",
  "Money paramga aina… mental paramga aina… nuvvu naa backbone 💪💞",

  "Naa worst time lo kuda naa pakkane nilabaddavu 🥹❤️",
  "Anduke… nuvvu naa life lo devatha laanti daani 🙏✨",

  "Nenu maaradaniki try chestunna 💪",
  "Nee kosam better person avvali ani anukuntunna 🥺💖",
  "Endukante… naa world antha nuvve ❤️♾️",

  "💖 Last but Not Least… 💖",

  "I love you so much Ammu ❤️💋",
  "Today… Tomorrow… Forever and Always ♾️💞"
];

const ulEl = document.querySelector("ul");

if (!ulEl) {
  console.error("UL element not found!");
}

// Get today's date (February support)
const today = new Date();
let daynumber = today.getMonth() === 1 ? today.getDate() - 1 : 0;
let activeIndex = daynumber;

const rotate = -360 / febHolidays.length;

let startY = 0;
let endY = 0;

// Initialize
init();

function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");

    liEl.style.setProperty("--day_idx", idx);

    liEl.innerHTML = `
      <time datetime="${today.getFullYear()}-02-${idx + 1}">
        ${idx + 1}
      </time>
      <span>${holiday}</span>
    `;

    ulEl.append(liEl);
  });

  ulEl.style.setProperty("--rotateDegrees", rotate);

  adjustDay(0);
}

// Change active item
function adjustDay(nr) {
  daynumber += nr;

  ulEl.style.setProperty("--currentDay", daynumber);

  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");

  activeIndex =
    (activeIndex + nr + febHolidays.length) % febHolidays.length;

  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );

  if (!newActiveEl) return;

  document.body.style.backgroundColor =
    window.getComputedStyle(newActiveEl).backgroundColor;

  newActiveEl.classList.add("active");
}

// Keyboard Support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") adjustDay(-1);
  if (e.key === "ArrowDown") adjustDay(1);
});

// Touch Support (Mobile)
window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  endY = e.changedTouches[0].clientY;

  handleSwipe();
});

// Detect Swipe
function handleSwipe() {
  const diff = startY - endY;

  // Minimum swipe distance
  if (Math.abs(diff) < 50) return;

  // Swipe Up
  if (diff > 0) {
    adjustDay(1);
  }

  // Swipe Down
  if (diff < 0) {
    adjustDay(-1);
  }
}
