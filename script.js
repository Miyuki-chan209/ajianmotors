document.addEventListener("DOMContentLoaded", function () {
  let timeLeft = 10; // Seconds until force-redirect
  const timerElement = document.getElementById("redirect-timer");
  const targetUrl = "https://v0-am-web.vercel.app";

  const countdownInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      window.location.href = targetUrl;
    }
  }, 1000);
});
