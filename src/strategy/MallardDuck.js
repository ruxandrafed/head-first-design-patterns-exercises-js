import Duck from './Duck';
import FlyWithWings from './FlyWithWings';
import Quack from "./Quack";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log('MallardDuck displayed!\n');
  }
}

export default MallardDuck;
