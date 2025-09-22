window.onload = function() {
    var launchDate = new Date("Nov 1, 2025 12:00:00").getTime();

    var timer = setInterval(function() {
      var now = new Date().getTime();
      var distance = launchDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var countdownEl = document.getElementById("countdown");
      if (countdownEl) {
        if (distance > 0) {
          countdownEl.innerHTML = `
            <div class="countdown-row">
            <div class="time-box">
              <span class="time-value">${String(days).padStart(2, '0')}</span>
              <span class="time-label">Jours</span>
            </div>
            <div class="time-box">
              <span class="time-value">${String(hours).padStart(2, '0')}</span>
              <span class="time-label">Heures</span>
            </div>
            <div class="time-box">
              <span class="time-value">${String(minutes).padStart(2, '0')}</span>
              <span class="time-label">Minutes</span>
            </div>
            <div class="time-box">
              <span class="time-value">${String(seconds).padStart(2, '0')}</span>
              <span class="time-label">Secondes</span>
            </div>
            </div>
          `;
        } else {
          clearInterval(timer);
          countdownEl.innerHTML = `<h3>Disponible maintenant 🚀</h3>`;
        }
      }
    }, 1000);
};