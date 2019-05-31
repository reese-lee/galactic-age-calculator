import { Galactic } from './../src/index.js';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('Galactic', function() {

  it('should test whether a birthday creates an instance of the Date object', function() {
    let test = new Galactic(new Date("06, 05, 1992"));
    expect(test.getDay()).toEqual(5);
  });

  it('should test whether it will return correct Earth age', function() {
    let test = new Galactic("06, 05, 1992");
    let testAge = test.getAge(test);
    expect(testAge).toEqual(26);
  });

  it('should test whether it will return age in Mercury years', function() {

    expect().toEqual();
  });

  it('should test whether it will return age in Venus years', function() {

    expect().toEqual();
  });

  it('should test whether it will return age in Mars years', function() {

    expect().toEqual();
  });

  it('should test whether it will return age in Jupiter years', function() {

    expect().toEqual();
  });

  it('should test whether it will return life expectancy in Mercury years', function() {

    expect().toEqual();
  });

  it('should test whether it will return life expectancy in Venus years', function() {

    expect().toEqual();
  });

  it('should test whether it will return life expectancy in Mars years', function() {

    expect().toEqual();
  });

  it('should test whether it will return life expectancy in Jupiter years', function() {

    expect().toEqual();
  });

});
