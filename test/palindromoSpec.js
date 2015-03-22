var expect = chai.expect;

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(2)).to.be.equal(1);
      // assert.equal(-1, [1,2,3].indexOf(0));
      expect([1,2,3].indexOf(0)).to.be.equal(-1);
    });
  });
});