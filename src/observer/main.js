import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import StatisticsDisplay from './StatisticsDisplay';

class MainObserver {
  run() {
    let oWeatherData = new WeatherData();
    new CurrentConditionsDisplay(oWeatherData);
    new ForecastDisplay(oWeatherData);
    new StatisticsDisplay(oWeatherData);
    oWeatherData.setMeasurements(80, 65, 30.4);
    oWeatherData.setMeasurements(82, 70, 29.2);
    oWeatherData.setMeasurements(78, 90, 29.2);
  }
}

export default new MainObserver();

