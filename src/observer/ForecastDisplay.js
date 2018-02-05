import WeatherDataDisplay from "./WeatherDataDisplay";

class ForecastDisplay extends WeatherDataDisplay {
  constructor(subject) {
    super();
    this.currentPressure = 29.92;
    this.lastPressure = 0;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  display() {
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!\n");
    } else if (this.currentPressure === this.lastPressure) {
      console.log("More of the same\n");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather\n");
    }
  }
}

export default ForecastDisplay;