import domAnchors from './domAnchors.js';
import Hand from './Hand.js';
import Result from './Result.js';
import {
  handsArray
} from './utilities.js';

class Game {
  constructor() {
    this.human = new Hand();
    this.cpu = new Hand();
  }

  checkHumanChoice = () => {
    console.log(this.human.getHand())

    if (!this.human.getHand()) {
      return alert('hand not choosen');
    }
  }

  playGame() {
    domAnchors.btnPlay.addEventListener('click', this.checkHumanChoice)


    console.log('playing');
  }
}

export default Game;