      const API_KEY = '0b7bdcbf58c8745aa6f707f0e2f547cd'   //API key
      const form    = document.querySelector("form")          //selector for form
      const search  = document.querySelector("#search")                 // selector , search box 
      const weather = document.querySelector("#weather")
    
    
    
    
    
      //   const API = 'https://api.openweathermap.org/data/2.5/weather?  
    // q=${city}&appid=${API_KEY}&units=metric'
    
    // const IMG_URL = 'https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'
    
          
     
    
    const getWeather = async(city) => {    //takes city name from user
        weather.innerHTML = `<h2> Loading... <h2>`

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        
        const response = await fetch(url); //fetch from API
        
        const data = await response.json()
        
        return showWeather(data)
    }
    
    const showWeather = (data) => {
        if (data.cod == "404") {
            weather.innerHTML = `<h2> City Not Found <h2>`
            return;
        }

        weather.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main} </h4>
      <p> Humidity: ${data.main.humidity}%</p>   
      <p> Wind Speed: ${data.wind.speed}m/s</p>


            </div>
    `
    }
    
    form.addEventListener(
        "submit",  //to trigger submit event 
        function(event) {
            getWeather(search.value) //will show whatever user searches for on the console screen

            event.preventDefault(); //stops reloading of the form
        }
    )