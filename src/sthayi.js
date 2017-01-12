class Sthayi {
  constructor(name, frequencyMultiplier) {
    this.name = name;
    this.frequencyMultiplier = frequencyMultiplier;
  }

  getName() {
    return this.name;
  }

  getFrequencyMultiplier() {
    return this.frequencyMultiplier;
  }
}

module.exports = {
  Sthayi: Sthayi,
  Madhya: new Sthayi('Normal', 1),
  Mandra: new Sthayi('Mandra', 0.5),
  Tara: new Sthayi('Tara', 2)
};
