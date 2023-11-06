let city = document.getElementById('city');
let temp = document.getElementById('temp');
let type = document.getElementById('type');
let image = document.getElementById('img');
let input = document.getElementById('inp');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let details = document.getElementById('details')
let API_key = "c08a26837a0ac608edb9700aed93b733";

let data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`);
    console.log(getData);
    let jsonData = await getData.json();

    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location");
        image.src = "./error.png";
        details.style.display = "none";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    
    if(jsonData.cod == 404){
        alert("Please Enter right Location");
        image.src = "./error.png";
        details.style.display = "none";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=jsonData.name;
    temp.innerHTML=Math.round(jsonData.main.temp)+ "°C";
    type.innerHTML=jsonData.weather[0].main;
    humidity.innerHTML = jsonData.main.humidity + "%"
    wind.innerHTML = jsonData.wind.speed + "Km/H";


    switch(jsonData.weather[0].main){
        case "Clouds":
            image.src = "./clouds.png";
            details.style.display = "flex";
        break;
        case "Clear":
        image.src = "./clear.png";
        details.style.display = "flex";
        break;
        case "Rain":
        image.src = "./rain.png";
         details.style.display = "flex";
        break;
        case "Smoke":
        image.src = "./mist.png";
        details.style.display = "flex";
        break;
        case "drizzle":
        image.src = "./drizzle.png";
        details.style.display = "flex";
        break;
        case "snow":
        image.src = "./snow.png";
        details.style.display = "flex";
        break;
    }
    input.value = "";
}
function myFun(){
    search = input.value;
    data(search);

}
