import chai from 'chai';
import Sthayi from '../src/sthayi.js';

const expect = chai.expect;

describe('Sthayi', function () {
  
  describe('Mandra sthayi', function () {
    it('is on the lower octave', () => {
      expect(Sthayi.Mandra.getFrequencyMultiplier()).to.be.equal(0.5);
    });
  });

  describe('Madhya sthayi', function () {
    it('is on the regular octave', () => {
      expect(Sthayi.Madhya.getFrequencyMultiplier()).to.be.equal(1);
    });
  });

  describe('Tara sthayi', function () {
    it('is on the higher octave', () => {
      expect(Sthayi.Tara.getFrequencyMultiplier()).to.be.equal(2);
    });
  });
});
