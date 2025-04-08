
const messages = [
  "تو می‌تونی، چون قلب بزرگی داری!",
  "باور کن که شایسته‌ترین دختری.",
  "هیچ‌کس نمی‌تونه جلوی درخشش تو رو بگیره.",
  "رز همیشه باهاته. نفس عمیق بکش و ادامه بده."
];
document.getElementById("daily-message").innerText =
  messages[Math.floor(Math.random() * messages.length)];

function startStudyTimer() {
  startTimer(60 * 60);
}
function startBreakTimer() {
  startTimer(5 * 60);
}
function startTimer(duration) {
  let timer = duration;
  const timerDisplay = document.getElementById("timer");
  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (--timer < 0) clearInterval(interval);
  }, 1000);
}
