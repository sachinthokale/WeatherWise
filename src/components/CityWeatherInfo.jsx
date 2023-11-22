/* eslint-disable react/prop-types */
import "./CityWeatherInfo.css";

const CityWeatherInfo = ({
  icon,
  cityName,
  cityTemp,
  cityHumidity,
  cityWindSpeed,
  cityWindDegree,
}) => {
  return (
    <div className="city-main">
      <img src={icon} alt="" />
      <div className="city-info">
        <h3>{cityName}</h3>
        <p>Temperature:{cityTemp} °C</p>
        <p>Humidity:{cityHumidity} %</p>
        <p>Wind Speed:{cityWindSpeed} m/s</p>
        <p>Wind Degree:{cityWindDegree} °</p>
      </div>
    </div>
  );
};

export default CityWeatherInfo;
