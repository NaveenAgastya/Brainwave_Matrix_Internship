document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "EXPIRED";
        }
    }

    const timerInterval = setInterval(updateCountdown, 1000);
});
