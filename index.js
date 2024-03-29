const apiKey="d102ce6f8a7f8c61a416505fdeb98697";
const main = document.getElementById("main");
const form = document.getElementById("form");
const Search = document.getElementById("search");

const url= (city) => 'https://api.openweather.org/data/2.5/weather?q=${city}&appid=d102ce6f8a7f8c61a416505fdeb98697';

async function getWeatherByLocation(city){
    const resp=await fetch(url(city), {
        origin:"cros"
    });
    const respData=await resp.json();
    addWeatherToPage(respData);
}

function addWeatherToPage(data){
    const temp=Ktoc(data.main.temp);

    const weather=document.createElement('div')
    weather.classList.add('weather');

    weather.innerHTML=`
    <h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    ${temp}°C
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    </h2>
    <small>${data.weather[0].main}</small>
    `
    main.innerHTML="";
    main.appendChild(weather)
}

function Ktoc(K){
return Math.floor(K - 273.15);
}
form.addEventListener('submit', (e) =>{
    const city=search.value;
    if(city){
        getWeatherByLocation(city)
    }
})
