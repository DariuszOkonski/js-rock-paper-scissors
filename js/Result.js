class Result {
  constructor() {
    let gameWinner = '';
    let numberOfGames = 0;
    let humanWins = 0;
    let cpuWins = 0;
    let draws = 0;

    this.getGameWinner = () => {
      return gameWinner;
    }
    this.setGameWinner = (winner) => {
      gameWinner = winner;
    }
    this.getNumberOfGames = () => {
      return numberOfGames
    }
    this.increaseNumberOfGames = () => {
      numberOfGames++;
    }
    this.resetNumberOfGames = () => {
      numberOfGames = 0;
    }
    this.getHumanWins = () => {
      return humanWins;
    }
    this.increaseHumanWins = () => {
      humanWins++;
    }
    this.resetHumanWins = () => {
      humanWins = 0;
    }
    this.getCpuWins = () => {
      return cpuWins;
    }
    this.increaseCpuWins = () => {
      cpuWins++;
    }
    this.resetCpuWins = () => {
      cpuWins = 0;
    }
    this.getDraws = () => {
      return draws;
    }
    this.increaseDraws = () => {
      draws++;
    }
    this.resetDraws = () => {
      draws = 0;
    }
    this.resetResults = () => {
      humanChoice = '';
      cpuChoice = '';
      gameWinner = '';
      numberOfGames = 0;
      humanWins = 0;
      cpuWins = 0;
      draws = 0;
    }
  }
}

export default Result;