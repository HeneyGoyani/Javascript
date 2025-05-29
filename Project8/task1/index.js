let countdownBegin;

function startCountdown() 
{
  const birthdayInput = document.getElementById("birthdayInput").value;
if(!birthdayInput) 
{
  alert("PLEASE SELECT YOUR BIRTHDAY.");
  return;
}

clearInterval(countdownBegin);

const now = new Date();
let birthday = new Date(birthdayInput);
birthday.setFullYear(now.getFullYear());

if (birthday < now) 
{
  birthday.setFullYear(now.getFullYear() + 1);
}

  countdownBegin = setInterval(() => 
    {
    const now = new Date();
    const timeLeft = birthday - now;

    if(timeLeft <= 0) 
    {
      clearInterval(countdownBegin);
      document.getElementById("countdown").innerHTML = "<p>🥳🎉Happy Birthday..🥳🎉</p>";
      return;
    }

    const seconds = Math.floor(timeLeft / 1000) % 60;
    const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}