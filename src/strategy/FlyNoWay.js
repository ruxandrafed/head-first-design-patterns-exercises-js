import FlyBehavior from "./FlyBehavior";

class FlyNoWay extends FlyBehavior {
  fly() {
    console.log('I can\'t fly!')
  }
}

export default FlyNoWay;
