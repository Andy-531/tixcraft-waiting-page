let totalSeconds = 225; // 3分45秒
const countdownEl = document.getElementById('countdown');
const progressFill = document.getElementById('progress-fill');
const queueNumberEl = document.getElementById('queue-number');

let timer = setInterval(() => {
    if (totalSeconds <= 0) {
        clearInterval(timer);
        countdownEl.textContent = "即將進入系統...";
        return;
    }
    
    totalSeconds--;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    
    countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    let progressPercent = ((225 - totalSeconds) / 225) * 65 + 35; 
    progressFill.style.width = progressPercent + '%';
    
    let currentQueue = 1288 - (225 - totalSeconds) * 3;
    if (currentQueue < 1) currentQueue = 1;
    queueNumberEl.textContent = currentQueue.toLocaleString();
}, 1000);

const retryBtn = document.getElementById('retry-btn');
retryBtn.addEventListener('click', () => {
    alert("正在重新連線至拓元伺服器... 目前排隊序號已確認安全！");
    retryBtn.textContent = "連線檢查中...";
    setTimeout(() => {
        retryBtn.textContent = "重新檢查連線狀態";
    }, 1500);
});