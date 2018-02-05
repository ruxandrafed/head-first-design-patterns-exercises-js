import MallardDuck from './MallardDuck';
import RubberDuck from './RubberDuck';
import DecoyDuck from './DecoyDuck';

class MainStrategy {

  run() {
    const mallard = new MallardDuck();
    const rubber = new RubberDuck();
    const decoy = new DecoyDuck();

    console.log('################\n## Mallard duck ##\n################');
    mallard.quack();
    mallard.swim();
    mallard.fly();
    mallard.display();

    console.log('################\n## Rubber duck ##\n################');
    rubber.quack();
    rubber.swim();
    rubber.fly();
    rubber.display();

    console.log('################\n## Decoy duck ##\n################\n');
    decoy.quack();
    decoy.swim();
    decoy.fly();
    decoy.display();
  }
}

export default new MainStrategy();
