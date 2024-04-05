const apiKey = "cc84cf5bbc5dfaeaf9407c44793a7e21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

let input = document.getElementById("search");
let btnInput = document.getElementById("btnSearch");
let cityName = document.getElementById("cityName");
let temp = document.getElementById("temp");
let windSpeed = document.getElementById("windspeed");
let humidity = document.getElementById("humidity");

btnInput.addEventListener("click",()=>{
    if(input.value === ""){
        console.log("INSERT SOMETHING");
    }else{
        const city = input.value;
        const api = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
        fetch(api).then(response => {
            if(!response){
                throw new Error("Network responde is not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            cityName.innerHTML = data.name;
            temp.innerText = Math.round(data.main.temp) + "Cº";
            windSpeed.innerText = "Windspeed : " + Math.round(data.wind.speed);
            humidity.innerText = "Humidity : " + Math.round(data.main.humidity);
        })
    }
});