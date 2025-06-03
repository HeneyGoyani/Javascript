async function fetchData() {
    const dateInput = document.getElementById("dateInput").value;
    if (!dateInput) {
      alert("Please select a date!");
      return;
    }
  
    const response = await fetch("https://api.rootnet.in/covid19-in/stats/history");
    const data = await response.json();
    const selectedDateData = data.data.find(entry => entry.day === dateInput);
  
    if (!selectedDateData) {
      alert("No data found hear!");
      return;
    }
  
    displayData(selectedDateData);
  }
  
  function displayData(data) {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; // Clear previous data
  
    data.regional.forEach(state => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <h3>${state.loc}</h3>
        <p><strong>Recovered:</strong> ${state.discharged}</p>
        <p><strong>Deaths:</strong> ${state.deaths}</p>
      `;
  
      cardsContainer.appendChild(card);
    });
  }