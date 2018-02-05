import WeatherDataDisplay from "./WeatherDataDisplay";

class CurrentConditionsDisplay extends WeatherDataDisplay {
  constructor(subject) {
    super();
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity.\n");
  }
}

export default CurrentConditionsDisplay;