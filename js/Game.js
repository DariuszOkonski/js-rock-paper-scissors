import domAnchors from './domAnchors.js';
import Hand from './Hand.js';
import Result from './Result.js';
import {
  handsArray
} from './utilities.js';

class Game {
  constructor() {
    this.hand = {
      rock: handsArray[0],
      paper: handsArray[1],
      scissors: handsArray[2],
    }
    this.human = new Hand();
    this.cpu = new Hand();
    this.domElements = domAnchors;
  }

  letsPlay = () => {
    this.clearError();
    if (this.human.getHand() === '') {
      this.domElements.dangerInfo.classList.remove('error');
      this.domElements.dangerInfo.innerText = 'Choose a hand';
      return;
    }

    console.log('Now it is computer choice');
  }

  chooseRock = () => {
    this.resetBoxShadow();
    this.human.setHand(this.hand.rock);
    this.domElements.handRock.style.boxShadow = '0px 0px 5px 5px rgba(195,242,8,1)';
    this.displayHumanChoice();
    this.clearError();
  }

  choosePaper = () => {
    this.resetBoxShadow();
    this.human.setHand(this.hand.paper);
    this.domElements.handPaper.style.boxShadow = '0px 0px 5px 5px rgba(195,242,8,1)';
    this.displayHumanChoice();
    this.clearError();
  }

  chooseScissors = () => {
    this.resetBoxShadow();
    this.human.setHand(this.hand.scissors);
    this.domElements.handScissors.style.boxShadow = '0px 0px 5px 5px rgba(195,242,8,1)';
    this.displayHumanChoice();
    this.clearError();
  }

  displayHumanChoice = () => {
    this.domElements.yourChoice.textContent = this.human.getHand();
  }

  resetBoxShadow = () => {
    this.domElements.handRock.style.boxShadow = 'none';
    this.domElements.handPaper.style.boxShadow = 'none';
    this.domElements.handScissors.style.boxShadow = 'none';
  }

  clearError = () => {
    this.domElements.dangerInfo.classList.add('error');
  }

  playGame() {
    this.domElements.btnPlay.addEventListener('click', this.letsPlay);
    this.domElements.handRock.addEventListener('click', this.chooseRock);
    this.domElements.handPaper.addEventListener('click', this.choosePaper);
    this.domElements.handScissors.addEventListener('click', this.chooseScissors);

    console.log('playGame');
  }
}

export default Game;