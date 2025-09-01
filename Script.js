function updateClock() {
  const now = new Date();

  // Digital clock
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("digital").textContent = `${hours}:${minutes}:${seconds}`;

  // Analog clock
  const hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5; 
  const minuteDeg = now.getMinutes() * 6;
  const secondDeg = now.getSeconds() * 6;

  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
