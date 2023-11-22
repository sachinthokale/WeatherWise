import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import "./Home.css";
import axios from "axios";
import CityWeatherInfo from "../components/CityWeatherInfo.jsx";
import sunny from "../assets/icon-1.svg";
import cloudwithSun from "../assets/icon-3.svg";
import rainywitSun from "../assets/icon-4.svg";
import rain from "../assets/icon-9.svg";

const api = {
  key: "84d1b961dc8518e6253741a715e70c95",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Home = () => {
  const cityName = ["Navi Mumbai", "Bangalore", "London", "New York", "Sydney"];
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return sunny;
      case "02d":
      case "03d":
      case "04d":
        return cloudwithSun;
      case "09d":
      case "10d":
      case "11d":
        return rainywitSun;
      default:
        return rain;
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCity) {
        try {
          const { data } = await axios.get(
            `${api.base}weather?q=${selectedCity}&units=metric&appid=${api.key}`
          );
          setWeatherData(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchData();
  }, [selectedCity]);

  const weatherIcon = getWeatherIcon(weatherData.weather?.[0]?.icon || "01d");
  console.log("first", weatherIcon);

  return (
    <div className="home">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="city-box">
        <div className="left-section">
          <h1>Discover City Forecasts</h1>
          {cityName.map((city) => (
            <button key={city} onClick={() => handleCityClick(city)}>
              {city}
            </button>
          ))}
        </div>
        <div className="right-section">
          <CityWeatherInfo
            icon={weatherIcon}
            cityName={weatherData.name}
            cityTemp={weatherData.main?.temp}
            cityHumidity={weatherData.main?.humidity}
            cityWindSpeed={weatherData.wind?.speed}
            cityWindDegree={weatherData.wind?.deg}
          />
          {/* <p>Local Time: {getLocalTime(weatherData.dt, weatherData.timezone)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
