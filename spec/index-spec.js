// import { Galactic } from './../src/index.js';

describe('Galactic', function() {

  it('should test whether a birthday creates an instance of the Date object', function() {
    let test = new Date("06, 05, 1992");
    expect(test.getDay()).toEqual(5);
  });

});
