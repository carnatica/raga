var Sthayi = require('../src/sthayi.js');

describe('Sthayi', function () {
  
  describe('Mandra sthayi', function () {
    it('is on the lower octave', () => {
      expect(Sthayi.Mandra.getFrequencyMultiplier()).toEqual(0.5);
    });
  });

  describe('Madhya sthayi', function () {
    it('is on the regular octave', () => {
      expect(Sthayi.Madhya.getFrequencyMultiplier()).toEqual(1);
    });
  });

  describe('Tara sthayi', function () {
    it('is on the higher octave', () => {
    	expect(Sthayi.Tara.getFrequencyMultiplier()).toEqual(2);
    });
  });
});