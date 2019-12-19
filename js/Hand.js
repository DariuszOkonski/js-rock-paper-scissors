class Hand {
  constructor() {
    let currentHand = '';

    this.getHand = () => {
      return currentHand;
    }

    this.setHand = (hand) => {
      currentHand = hand;
    }
  }

  randomHand(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}

export default Hand;