import Beverage from "./Beverage";

class Espresso extends Beverage {
  constructor() {
    super('Espresso');
  }

  cost() {
    return 1.99;
  }
}

export default Espresso;