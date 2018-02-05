import WeatherDataDisplay from "./WeatherDataDisplay";

class StatisticsDisplay extends WeatherDataDisplay {
  constructor(subject) {
    super();
    this.maxTemp = parseFloat(0);
    this.minTemp = parseFloat(200);
    this.tempSum = parseFloat(0);
    this.numReadings = 0;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.tempSum += temperature;
    this.numReadings++;

    if (temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }

    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }

    this.display();
  }

  display() {
    console.log("Avg/Max/Min temperature = " + (this.tempSum / this.numReadings)
      + "/" + this.maxTemp + "/" + this.minTemp);
  }
}

export default StatisticsDisplay;