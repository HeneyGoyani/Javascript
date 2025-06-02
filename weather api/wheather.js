const temp = document.getElementById("temp"),
        date = document.getElementById("date-time"),
        condition = document.getElementById("condition"),
        rain = document.getElementById("rain"),
        mainIcon = document.getElementById("icon"),
        currentLocation = document.getElementById("location"),
        uvIndex = document.querySelector(".uv-index"),
        uvText = document.querySelector(".uv-text"),
        windSpeed = document.querySelector(".wind-speed"),
        sunRise = document.querySelector(".sun-rise"),
        sunSet = document.querySelector(".sun-set"),
        humidity = document.querySelector(".humidity"),
        visibilty = document.querySelector(".visibilty"),
        humidityStatus = document.querySelector(".humidity-status"),
        airQuality = document.querySelector(".air-quality"),
        airQualityStatus = document.querySelector(".air-quality-status"),
        visibilityStatus = document.querySelector(".visibilty-status"),
        searchForm = document.querySelector("#search"),
        search = document.querySelector("#query"),
        celciusBtn = document.querySelector(".celcius"),
        fahrenheitBtn = document.querySelector(".fahrenheit"),
        tempUnit = document.querySelectorAll(".temp-unit"),
        hourlyBtn = document.querySelector(".hourly"),
        weekBtn = document.querySelector(".week"),
        weatherCards = document.querySelector("#weather-cards");

    let currentCity = "";
    let currentUnit = "c";
    let hourlyorWeek = "week";

    function getDateTime() {
        let now = new Date(),
            hour = now.getHours(),
            minute = now.getMinutes();

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        hour = hour % 12;
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        let dayString = days[now.getDay()];
        return `${dayString}, ${hour}:${minute}`;
    }

    date.innerText = getDateTime();
    setInterval(() => {
        date.innerText = getDateTime();
    }, 1000);

    function getPublicIp() {
        fetch("https://geolocation-db.com/json/", {
            method: "GET",
            headers: {}
        })
            .then((response) => response.json())
            .then((data) => {
                currentCity = data.city;
                getWeatherData(data.city, currentUnit, hourlyorWeek);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    getPublicIp();

    function getWeatherData(city, unit, hourlyorWeek) {
        fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`,
            {
                method: "GET",
                headers: {}
            }
        )
            .then((response) => response.json())
            .then((data) => {
                let today = data.currentConditions;
                if (unit === "c") {
                    temp.innerText = today.temp;
                } else {
                    temp.innerText = celciusToFahrenheit(today.temp);
                }
                currentLocation.innerText = data.resolvedAddress;
                condition.innerText = today.conditions;
                rain.innerText = "Perc - " + today.precip + "%";
                uvIndex.innerText = today.uvindex;
                windSpeed.innerText = today.windspeed;
                measureUvIndex(today.uvindex);
                mainIcon.src = getIcon(today.icon);
                changeBackground(today.icon);
                humidity.innerText = today.humidity + "%";
                updateHumidityStatus(today.humidity);
                visibilty.innerText = today.visibility;
                updateVisibiltyStatus(today.visibility);
                airQuality.innerText = today.winddir;
                updateAirQualityStatus(today.winddir);
                if (hourlyorWeek === "hourly") {
                    updateForecast(data.days[0].hours, unit, "day");
                } else {
                    updateForecast(data.days, unit, "week");
                }
                sunRise.innerText = covertTimeTo12HourFormat(today.sunrise);
                sunSet.innerText = covertTimeTo12HourFormat(today.sunset);
            })
            .catch((err) => {
                alert("City not found in our database");
            });
    }

    function updateForecast(data, unit, type) {
        weatherCards.innerHTML = "";
        let day = 0;
        let numCards = 0;
        if (type === "day") {
            numCards = 24;
        } else {
            numCards = 7;
        }
        for (let i = 0; i < numCards; i++) {
            let card = document.createElement("div");
            card.classList.add("card");
            let dayName = getHour(data[day].datetime);
            if (type === "week") {
                dayName = getDayName(data[day].datetime);
            }
            let dayTemp = data[day].temp;
            if (unit === "f") {
                dayTemp = celciusToFahrenheit(data[day].temp);
            }
            let iconCondition = data[day].icon;
            let iconSrc = getIcon(iconCondition);
            let tempUnit = "°C";
            if (unit === "f") {
                tempUnit = "°F";
            }
            card.innerHTML = `
                <h2 class="day-name">${dayName}</h2>
            <div class="card-icon">
              <img src="${iconSrc}" class="day-icon" alt="" />
            </div>
            <div class="day-temp">
              <h2 class="temp">${dayTemp}</h2>
              <span class="temp-unit">${tempUnit}</span>
            </div>
  `;
            weatherCards.appendChild(card);
            day++;
        }
    }

    function getIcon(condition) {
        if (condition === "partly-cloudy-day") {
            return "https://i.ibb.co/PZQXH8V/27.png";
        } else if (condition === "partly-cloudy-night") {
            return "https://i.ibb.co/Kzkk59k/15.png";
        } else if (condition === "rain") {
            return "https://i.ibb.co/kBd2NTS/39.png";
        } else if (condition === "clear-day") {
            return "https://i.ibb.co/rb4rrJL/26.png";
        } else if (condition === "clear-night") {
            return "https://i.ibb.co/1nxNGHL/10.png";
        } else {
            return "https://i.ibb.co/rb4rrJL/26.png";
        }
    }

    function changeBackground(condition) {
        const body = document.querySelector("body");
        let bg = "";
        if (condition === "partly-cloudy-day") {
            bg = "https://i.ibb.co/qNv7NxZ/pc.webp";
        } else if (condition === "partly-cloudy-night") {
            bg = "https://i.ibb.co/RDfPqXz/pcn.jpg";
        } else if (condition === "rain") {
            bg = "https://i.ibb.co/h2p6Yhd/rain.webp";
        } else if (condition === "clear-day") {
            bg = "https://i.ibb.co/WGry01m/cd.jpg";
        } else if (condition === "clear-night") {
            bg = "https://i.ibb.co/kqtZ1Gx/cn.jpg";
        } else {
            bg = "https://i.ibb.co/qNv7NxZ/pc.webp";
        }
        body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${bg})`;
    }

    function getHour(time) {
        let hour = time.split(":")[0];
        let min = time.split(":")[1];
        if (hour > 12) {
            hour = hour - 12;
            return `${hour}:${min} PM`;
        } else {
            return `${hour}:${min} AM`;
        }
    }

    function covertTimeTo12HourFormat(time) {
        let hour = time.split(":")[0];
        let minute = time.split(":")[1];
        let ampm = hour >= 12 ? "pm" : "am";
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        let strTime = hour + ":" + minute + " " + ampm;
        return strTime;
    }

    function getDayName(date) {
        let day = new Date(date);
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        return days[day.getDay()];
    }

    function measureUvIndex(uvIndex) {
        if (uvIndex <= 2) {
            uvText.innerText = "Low";
        } else if (uvIndex <= 5) {
            uvText.innerText = "Moderate";
        } else if (uvIndex <= 7) {
            uvText.innerText = "High";
        } else if (uvIndex <= 10) {
            uvText.innerText = "Very High";
        } else {
            uvText.innerText = "Extreme";
        }
    }

    function updateHumidityStatus(humidity) {
        if (humidity <= 30) {
            humidityStatus.innerText = "Low";
        } else if (humidity <= 60) {
            humidityStatus.innerText = "Moderate";
        } else {
            humidityStatus.innerText = "High";
        }
    }

    function updateVisibiltyStatus(visibility) {
        if (visibility <= 0.03) {
            visibilityStatus.innerText = "Dense Fog";
        } else if (visibility <= 0.16) {
            visibilityStatus.innerText = "Moderate Fog";
        } else if (visibility <= 0.35) {
            visibilityStatus.innerText = "Light Fog";
        } else if (visibility <= 1.13) {
            visibilityStatus.innerText = "Very Light Fog";
        } else if (visibility <= 2.16) {
            visibilityStatus.innerText = "Light Mist";
        } else if (visibility <= 5.4) {
            visibilityStatus.innerText = "Very Light Mist";
        } else if (visibility <= 10.8) {
            visibilityStatus.innerText = "Clear Air";
        } else {
            visibilityStatus.innerText = "Very Clear Air";
        }
    }

    function updateAirQualityStatus(airquality) {
        if (airquality <= 50) {
            airQualityStatus.innerText = "Good👌";
        } else if (airquality <= 100) {
            airQualityStatus.innerText = "Moderate😐";
        } else if (airquality <= 150) {
            airQualityStatus.innerText = "Unhealthy for Sensitive Groups😷";
        } else if (airquality <= 200) {
            airQualityStatus.innerText = "Unhealthy😷";
        } else if (airquality <= 250) {
            airQualityStatus.innerText = "Very Unhealthy😨";
        } else {
            airQualityStatus.innerText = "Hazardous😱";
        }
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let location = search.value;
        if (location) {
            currentCity = location;
            getWeatherData(location, currentUnit, hourlyorWeek);
        }
    });

    function celciusToFahrenheit(temp) {
        return ((temp * 9) / 5 + 32).toFixed(1);
    }

    var currentFocus;
    search.addEventListener("input", function (e) {
        removeSuggestions();
        var a,
            b,
            i,
            val = this.value;
        if (!val) {
            return false;
        }
        currentFocus = -1;

        a = document.createElement("ul");
        a.setAttribute("id", "suggestions");

        this.parentNode.appendChild(a);

        for (i = 0; i < cities.length; i++) {
            if (
                cities[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()
            ) {

                b = document.createElement("li");

                b.innerHTML =
                    "<strong>" + cities[i].name.substr(0, val.length) + "</strong>";
                b.innerHTML += cities[i].name.substr(val.length);

                b.innerHTML += "<input type='hidden' value='" + cities[i].name + "'>";

                b.addEventListener("click", function (e) {

                    search.value = this.getElementsByTagName("input")[0].value;
                    removeSuggestions();
                });

                a.appendChild(b);
            }
        }
    });

    search.addEventListener("keydown", function (e) {
        var x = document.getElementById("suggestions");
        if (x) x = x.getElementsByTagName("li");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        }
        if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;

        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("active");
        }
    }

    function removeSuggestions() {
        var x = document.getElementById("suggestions");
        if (x) x.parentNode.removeChild(x);
    }

    fahrenheitBtn.addEventListener("click", () => {
        changeUnit("f");
    });
    celciusBtn.addEventListener("click", () => {
        changeUnit("c");
    });

    function changeUnit(unit) {
        if (currentUnit !== unit) {
            currentUnit = unit;
            tempUnit.forEach((elem) => {
                elem.innerText = `°${unit.toUpperCase()}`;
            });
            if (unit === "c") {
                celciusBtn.classList.add("active");
                fahrenheitBtn.classList.remove("active");
            } else {
                celciusBtn.classList.remove("active");
                fahrenheitBtn.classList.add("active");
            }
            getWeatherData(currentCity, currentUnit, hourlyorWeek);
        }
    }

    hourlyBtn.addEventListener("click", () => {
        changeTimeSpan("hourly");
    });
    weekBtn.addEventListener("click", () => {
        changeTimeSpan("week");
    });

    function changeTimeSpan(unit) {
        if (hourlyorWeek !== unit) {
            hourlyorWeek = unit;
            if (unit === "hourly") {
                hourlyBtn.classList.add("active");
                weekBtn.classList.remove("active");
            } else {
                hourlyBtn.classList.remove("active");
                weekBtn.classList.add("active");
            }
            getWeatherData(currentCity, currentUnit, hourlyorWeek);
        }
    }

    cities = [
        {
            country: "PK",
            name: "Abbottabad",
            lat: "34.1463",
            lng: "73.21168"
        },
        {
            country: "PK",
            name: "Adilpur",
            lat: "27.93677",
            lng: "69.31941"
        },
        {
            country: "PK",
            name: "Ahmadpur East",
            lat: "29.14269",
            lng: "71.25771"
        },
        {
            country: "PK",
            name: "Ahmadpur Sial",
            lat: "30.67791",
            lng: "71.74344"
        },
        {
            country: "PK",
            name: "Akora",
            lat: "34.00337",
            lng: "72.12561"
        },
        {
            country: "PK",
            name: "Aliabad",
            lat: "36.30703",
            lng: "74.61545"
        },
        {
            country: "PK",
            name: "Alik Ghund",
            lat: "30.48976",
            lng: "67.52177"
        },
        {
            country: "PK",
            name: "Alipur",
            lat: "29.38242",
            lng: "70.91106"
        },
        {
            country: "PK",
            name: "Alizai",
            lat: "33.53613",
            lng: "70.34607"
        },
        {
            country: "PK",
            name: "Alpurai",
            lat: "34.92039",
            lng: "72.63265"
        },
        {
            country: "PK",
            name: "Aman Garh",
            lat: "34.00584",
            lng: "71.92971"
        },
        {
            country: "PK",
            name: "Amirabad",
            lat: "34.18729",
            lng: "73.09078"
        },
        {
            country: "PK",
            name: "Arifwala",
            lat: "30.29058",
            lng: "73.06574"
        },
        {
            country: "PK",
            name: "Ashanagro Koto",
            lat: "34.10773",
            lng: "72.24517"
        },
        {
            country: "PK",
            name: "Athmuqam",
            lat: "34.57173",
            lng: "73.89724"
        },
        {
            country: "PK",
            name: "Attock City",
            lat: "33.76671",
            lng: "72.35977"
        },
        {
            country: "PK",
            name: "Awaran",
            lat: "26.45677",
            lng: "65.23144"
        },
        {
            country: "PK",
            name: "Baddomalhi",
            lat: "31.99042",
            lng: "74.6641"
        },
        {
            country: "PK",
            name: "Badin",
            lat: "24.656",
            lng: "68.837"
        },
        {
            country: "PK",
            name: "Baffa",
            lat: "34.4377",
            lng: "73.22368"
        },
        {
            country: "PK",
            name: "Bagarji",
            lat: "27.75431",
            lng: "68.75866"
        },
        {
            country: "PK",
            name: "Bagh",
            lat: "33.98111",
            lng: "73.77608"
        },
        {
            country: "PK",
            name: "Bahawalnagar",
            lat: "29.99835",
            lng: "73.25272"
        },
        {
            country: "PK",
            name: "Bahawalnagar",
            lat: "30.55083",
            lng: "73.39083"
        },
        {
            country: "PK",
            name: "Bahawalpur",
            lat: "29.39779",
            lng: "71.6752"
        },
        {
            country: "PK",
            name: "Bakhri Ahmad Khan",
            lat: "30.73586",
            lng: "70.83796"
        },
        {
            country: "PK",
            name: "Bandhi",
            lat: "26.58761",
            lng: "68.30215"
        },
        {
            country: "PK",
            name: "Bannu",
            lat: "32.98527",
            lng: "70.60403"
        },
        {
            country: "PK",
            name: "Barishal",
            lat: "36.32162",
            lng: "74.69502"
        },
        {
            country: "PK",
            name: "Barkhan",
            lat: "29.89773",
            lng: "69.52558"
        },
        {
            country: "PK",
            name: "Basirpur",
            lat: "30.57759",
            lng: "73.83912"
        },
        {
            country: "PK",
            name: "Basti Dosa",
            lat: "30.78769",
            lng: "70.86853"
        },
        {
            country: "PK",
            name: "Bat Khela",
            lat: "34.6178",
            lng: "71.97247"
        },
        {
            country: "PK",
            name: "Battagram",
            lat: "34.67719",
            lng: "73.02329"
        },
        {
            country: "PK",
            name: "Begowala",
            lat: "32.43816",
            lng: "74.26794"
        },
        {
            country: "PK",
            name: "Bela",
            lat: "26.22718",
            lng: "66.31178"
        },
        {
            country: "PK",
            name: "Berani",
            lat: "25.78497",
            lng: "68.80754"
        },
        {
            country: "PK",
            name: "Bhag",
            lat: "29.04174",
            lng: "67.82394"
        },
        {
            country: "PK",
            name: "Bhakkar",
            lat: "31.62685",
            lng: "71.06471"
        },
        {
            country: "PK",
            name: "Bhalwal",
            lat: "32.26576",
            lng: "72.89809"
        },
        {
            country: "PK",
            name: "Bhan",
            lat: "26.55831",
            lng: "67.72139"
        },
        {
            country: "PK",
            name: "Bhawana",
            lat: "31.56884",
            lng: "72.64917"
        },
        {
            country: "PK",
            name: "Bhera",
            lat: "32.48206",
            lng: "72.90865"
        },
        {
            country: "PK",
            name: "Bhimbar",
            lat: "32.97465",
            lng: "74.07846"
        },
        {
            country: "PK",
            name: "Bhiria",
            lat: "26.91041",
            lng: "68.19466"
        },
        {
            country: "PK",
            name: "Bhit Shah",
            lat: "25.80565",
            lng: "68.49143"
        },
        {
            country: "PK",
            name: "Bhopalwala",
            lat: "32.42968",
            lng: "74.3635"
        },
        {
            country: "PK",
            name: "Bozdar Wada",
            lat: "27.183",
            lng: "68.6358"
        },
        {
            country: "PK",
            name: "Bulri",
            lat: "24.86667",
            lng: "68.33333"
        },
        {
            country: "PK",
            name: "Būrewāla",
            lat: "30.16667",
            lng: "72.65"
        },
        {
            country: "PK",
            name: "Chak",
            lat: "27.85838",
            lng: "68.83378"
        },
        {
            country: "PK",
            name: "Chak Azam Sahu",
            lat: "30.75202",
            lng: "73.02834"
        },
        {
            country: "PK",
            name: "Chak Five Hundred Seventy-five",
            lat: "31.54514",
            lng: "73.82891"
        },
        {
            country: "PK",
            name: "Chak Jhumra",
            lat: "31.56808",
            lng: "73.18317"
        },
        {
            country: "PK",
            name: "Chak One Hundred Twenty Nine Left",
            lat: "30.42919",
            lng: "73.04522"
        },
        {
            country: "PK",
            name: "Chak Thirty-one -Eleven Left",
            lat: "30.42388",
            lng: "72.69737"
        },
        {
            country: "PK",
            name: "Chak Two Hundred Forty-nine Thal Development Authority",
            lat: "31.17772",
            lng: "71.2048"
        },
        {
            country: "PK",
            name: "Chakwal",
            lat: "32.93286",
            lng: "72.85394"
        },
        {
            country: "PK",
            name: "Chaman",
            lat: "30.91769",
            lng: "66.45259"
        },
        {
            country: "PK",
            name: "Chamber",
            lat: "25.29362",
            lng: "68.81176"
        },
        {
            country: "PK",
            name: "Charsadda",
            lat: "34.14822",
            lng: "71.7406"
        },
        {
            country: "PK",
            name: "Chawinda",
            lat: "32.34434",
            lng: "74.70507"
        },
        {
            country: "PK",
            name: "Chenab Nagar",
            lat: "31.75511",
            lng: "72.91403"
        },
        {
            country: "PK",
            name: "Cherat Cantonement",
            lat: "33.82342",
            lng: "71.89292"
        },
        {
            country: "PK",
            name: "Chhor",
            lat: "25.5126",
            lng: "69.78437"
        },
        {
            country: "PK",
            name: "Chichawatni",
            lat: "30.5301",
            lng: "72.69155"
        },
        {
            country: "PK",
            name: "Chilas",
            lat: "35.41287",
            lng: "74.10407"
        },
        {
            country: "PK",
            name: "Chiniot",
            lat: "31.72091",
            lng: "72.97836"
        },
        {
            country: "PK",
            name: "Chishtian",
            lat: "29.79713",
            lng: "72.85772"
        },
        {
            country: "PK",
            name: "Chitral",
            lat: "35.8518",
            lng: "71.78636"
        },
        {
            country: "PK",
            name: "Choa Saidan Shah",
            lat: "32.71962",
            lng: "72.98625"
        },
        {
            country: "PK",
            name: "Chowki Jamali",
            lat: "28.01944",
            lng: "67.92083"
        },
        {
            country: "PK",
            name: "Chuchar-kana Mandi",
            lat: "31.75",
            lng: "73.8"
        },
        {
            country: "PK",
            name: "Chuhar Jamali",
            lat: "24.3944",
            lng: "67.99298"
        },
        {
            country: "PK",
            name: "Chunian",
            lat: "30.96621",
            lng: "73.97908"
        },
        {
            country: "PK",
            name: "Dadhar",
            lat: "29.47489",
            lng: "67.65167"
        },
        {
            country: "PK",
            name: "Dadu",
            lat: "26.73033",
            lng: "67.7769"
        },
        {
            country: "PK",
            name: "Daggar",
            lat: "34.51106",
            lng: "72.48438"
        },
        {
            country: "PK",
            name: "Daira Din Panah",
            lat: "30.57053",
            lng: "70.93722"
        },
        {
            country: "PK",
            name: "Dajal",
            lat: "29.55769",
            lng: "70.37614"
        },
        {
            country: "PK",
            name: "Dalbandin",
            lat: "28.88846",
            lng: "64.40616"
        },
        {
            country: "PK",
            name: "Dandot RS",
            lat: "32.64167",
            lng: "72.975"
        },
        {
            country: "PK",
            name: "Daromehar",
            lat: "24.79382",
            lng: "68.17978"
        },
        {
            country: "PK",
            name: "Darya Khan",
            lat: "31.78447",
            lng: "71.10197"
        },
        {
            country: "PK",
            name: "Darya Khan Marri",
            lat: "26.67765",
            lng: "68.28666"
        },
        {
            country: "PK",
            name: "Daska Kalan",
            lat: "32.32422",
            lng: "74.35039"
        },
        {
            country: "PK",
            name: "Dasu",
            lat: "35.29169",
            lng: "73.2906"
        },
        {
            country: "PK",
            name: "Daud Khel",
            lat: "32.87533",
            lng: "71.57118"
        },
        {
            country: "PK",
            name: "Daulatpur",
            lat: "26.50158",
            lng: "67.97079"
        },
        {
            country: "PK",
            name: "Daultala",
            lat: "33.19282",
            lng: "73.14099"
        },
        {
            country: "PK",
            name: "Daur",
            lat: "26.45528",
            lng: "68.31835"
        },
        {
            country: "PK",
            name: "Dera Allahyar",
            lat: "28.37353",
            lng: "68.35078"
        },
        {
            country: "PK",
            name: "Dera Bugti",
            lat: "29.03619",
            lng: "69.15849"
        },
        {
            country: "PK",
            name: "Dera Ghazi Khan",
            lat: "30.04587",
            lng: "70.64029"
        },
        {
            country: "PK",
            name: "Dera Ismail Khan",
            lat: "31.83129",
            lng: "70.9017"
        },
        {
            country: "PK",
            name: "Dera Murad Jamali",
            lat: "28.54657",
            lng: "68.22308"
        },
        {
            country: "PK",
            name: "Dhanot",
            lat: "29.57991",
            lng: "71.75213"
        },
        {
            country: "PK",
            name: "Dhaunkal",
            lat: "32.40613",
            lng: "74.13706"
        },
        {
            country: "PK",
            name: "Dhoro Naro",
            lat: "25.50484",
            lng: "69.5709"
        },
        {
            country: "PK",
            name: "Digri",
            lat: "25.15657",
            lng: "69.11098"
        },
        {
            country: "PK",
            name: "Dijkot",
            lat: "31.21735",
            lng: "72.99621"
        },
        {
            country: "PK",
            name: "Dinan Bashnoian Wala",
            lat: "29.76584",
            lng: "73.26557"
        },
        {
            country: "PK",
            name: "Dinga",
            lat: "32.64101",
            lng: "73.72039"
        },
        {
            country: "PK",
            name: "Dipalpur",
            lat: "30.66984",
            lng: "73.65306"
        },
        {
            country: "PK",
            name: "Diplo",
            lat: "24.46688",
            lng: "69.58114"
        },
        {
            country: "PK",
            name: "Doaba",
            lat: "33.4245",
            lng: "70.73676"
        },
        {
            country: "PK",
            name: "Dokri",
            lat: "27.37421",
            lng: "68.09715"
        },
        {
            country: "PK",
            name: "Duki",
            lat: "30.15307",
            lng: "68.57323"
        },
    ];