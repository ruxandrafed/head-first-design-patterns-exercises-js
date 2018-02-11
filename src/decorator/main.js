import Espresso from './Espresso';
import Mocha from './Mocha';
import Whip from './Whip';

class MainDecorator {
  run() {
    let oEspressoWithMochaAndWhip = new Espresso();
    oEspressoWithMochaAndWhip = new Mocha(oEspressoWithMochaAndWhip);
    oEspressoWithMochaAndWhip = new Whip(oEspressoWithMochaAndWhip);

    console.log(oEspressoWithMochaAndWhip.getDescription(), oEspressoWithMochaAndWhip.cost());
  }
}

export default new MainDecorator();

