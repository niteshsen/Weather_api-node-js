
         const curDate = document.getElementById("date");
         const getCurrentDay = ()=>{
            var weekDay = ["Sun", "Mon","Tues","Wednes","Thrus","Fri","Satur",]
            let currentDay = new Date();
            let day = weekDay[currentDay.getDay()]
            return day
         }
        //  getCurrentDay()
         const getCurrentTime = ()=>{
            var m = ["Jan","Feb", "Mar", "April", "May", "June", "July", "August", "Sept", "Oct","Nov","Dec"]
            let now =  new Date();
            var month = now.getMonth()
            var day = now.getDate()

            let hours = now.getHours()
            let mins = now.getMinutes()
            let periods = "AM"

            if(hours > 11){
                periods = "PM"
                if(hours> 12){
                    hours -= 12
                }
            }
            if (mins < 10){
               mins = "0" + mins;
            }
            return `${m[month]} | ${hours}:${mins}${periods}`
         }

        const search = document.getElementById("search")
        const minmaxTemp = document.getElementById("minmaxtemp")
        const tempValue = document.getElementById("tempvalue")
        const cityCountry = document.getElementById("cityCountry")
        const btn = document.getElementById("btn")
        const imageOne = document.getElementById("imageone")
        
         const weather =  async() =>{
            
            const cityName = search.value
            const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=79794debc52a26ea0f2e7cb6f36b6bfe`
            const fetchData =  await fetch(api)
            const realData = await fetchData.json()
            const tempStatus = realData.weather[0].main
           

            if(tempStatus === "Clouds"){
                imageOne.src = "image/cloud.png"
            }else if(tempStatus === "Sunny"){
                imageOne.src = "image/sunny.png"
            }else if(tempStatus === "Rainy"){
                imageOne.src = "image/rain.png"
            }else{
                imageOne.src = "image/cloud.png"
            }


            if(realData.sys=== undefined){
                minmaxTemp.innerText = "city not found"
                tempValue.innerText = "city not found"
                cityCountry.innerText = "city not found"
            }else{
            const country = realData.sys.country
            const city = realData.name
           
             const Data = realData.main
             
             const mintemp = Data.temp_min;
             const maxtemp = Data.temp_max;
             const tempreture = Data.temp;
             minmaxTemp.innerText = ` Min ${mintemp}°C| Max ${maxtemp}°C`
             tempValue.innerText = `${tempreture}°C`;
             cityCountry.innerText = `${city}, ${country}`
             
            }
         }
     weather()

     btn.addEventListener("click" , weather)





    