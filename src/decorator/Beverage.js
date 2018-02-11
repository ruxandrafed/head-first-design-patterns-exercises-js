class Beverage {
  constructor(description = 'Unknown beverage') {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  cost() {
    throw new Error('This method should be overwritten!');
  }
}

export default Beverage;