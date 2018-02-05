import QuackBehavior from './QuackBehavior';

class MuteQuack extends QuackBehavior {
  quack() {
    console.log('I can\'t quack!');
  }
}

export default MuteQuack;
