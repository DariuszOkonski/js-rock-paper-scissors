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


    this.cpuChoice();

  }

  cpuChoice = () => {
    this.domElements.handCpu.style.visibility = 'visible';
    this.domElements.cpuPicture.setAttribute('src', '../img/loading.gif');

    this.buttonsOff();
    setTimeout(() => {
      this.cpu.setHand(this.cpu.randomHand(handsArray));
      this.setCpuChoosenPicture();
      this.displayCpuChoice();
      console.log('Cpu chand: ' + this.cpu.getHand());
    }, 1000);

  }

  setCpuChoosenPicture = () => {
    if (this.cpu.getHand() === 'rock') {
      this.domElements.cpuPicture.setAttribute('src', '../img/rock.jpg');
    } else if (this.cpu.getHand() === 'paper') {
      this.domElements.cpuPicture.setAttribute('src', '../img/paper.jpg');
    } else if (this.cpu.getHand() === 'scissors') {
      this.domElements.cpuPicture.setAttribute('src', '../img/scissors.jpg');
    } else {
      this.domElements.cpuPicture.setAttribute('src', '../img/loading.gif');
    }
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

  displayCpuChoice = () => {
    this.domElements.cpuChoice.textContent = this.cpu.getHand();
  }

  resetBoxShadow = () => {
    this.domElements.handRock.style.boxShadow = 'none';
    this.domElements.handPaper.style.boxShadow = 'none';
    this.domElements.handScissors.style.boxShadow = 'none';
  }

  clearError = () => {
    this.domElements.dangerInfo.classList.add('error');
  }

  buttonsOff = () => {
    this.domElements.btnPlay.style.visibility = 'hidden';
    this.domElements.btnReset.style.visibility = 'hidden';
  }

  buttonsOn = () => {
    this.domElements.btnPlay.style.visibility = 'visible';
    this.domElements.btnReset.style.visibility = 'visible';
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