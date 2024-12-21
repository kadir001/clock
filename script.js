function updateClock() {
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
  
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Add leading zero if time is less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
    secondElement.textContent = seconds;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display clock instantly
  updateClock();
  