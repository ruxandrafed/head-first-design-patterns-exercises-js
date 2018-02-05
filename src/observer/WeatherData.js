import Subject from './Subject';

class WeatherData extends Subject {
  constructor() {
    super();
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index,1);
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      console.log('Notifying observer:', observer.constructor.name);
      observer.update(this.temperature, this.humidity, this.pressure);
    })
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

export default WeatherData;
