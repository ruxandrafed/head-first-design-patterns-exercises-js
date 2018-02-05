import Duck from './Duck';
import FlyNoWay from './FlyNoWay';
import Squeak from './Squeak';

class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }

  display() {
    console.log("RubberDuck displayed!\n");
  }
}

export default RubberDuck;
