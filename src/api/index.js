const baseURL = "https://api.weatherapi.com/v1/current.json?key=c7e8955e24054d6481d75815251510";


export const getWeatherDataForCity = async(city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}