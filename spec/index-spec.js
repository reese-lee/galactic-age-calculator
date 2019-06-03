import { Galactic } from './../src/index.js';

describe('Galactic', function() {

  it('should test whether a birthday creates an instance of the Date object', function() {
    let test = new Date("06, 05, 1992");
    expect(test.getDay()).toEqual(5);
  });

  it('should test whether a Galactic object is created', function() {
    const dob = new Galactic(new Date(1992, 5, 2));
    expect(typeof dob).toEqual(typeof new Galactic);
  });

  it('should test whether it will return correct Earth age', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let testAge = test.GetEarthAge(testBirthday);
    expect(testAge).toEqual(27);
  });

  it('should test whether it will return correct years left or extra years lived on Earth', function() {
    let test = new Galactic(new Date(1944, 5, 2));
    let yearsOver = test.GetLifeEarth();
    expect(yearsOver).toEqual(3.5);
  });

  it('should test whether it will return age in Mercury years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let mercuryAge = test.GetMercuryAge(testBirthday);
    expect(mercuryAge).toEqual(112);
  });

  it('should test whether it will return correct years left or extra years lived on Mercury', function() {
    let test = new Galactic(new Date(1944, 5, 2));
    let yearsOver = test.GetLifeMercury();
    expect(yearsOver).toEqual(14);
  });

  it('should test whether it will return age in Venus years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let venusAge = test.GetVenusAge(testBirthday);
    expect(venusAge).toEqual(43);
  });

  it('should test whether it will return correct years left or extra years lived on Venus', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let yearsLeft = test.GetLifeVenus();
    expect(yearsLeft).toEqual(72);
  });

  it('should test whether it will return age in Mars years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let marsAge = test.GetMarsAge(testBirthday);
    expect(marsAge).toEqual(14);
  });

  it('should test whether it will return correct years left or extra years lived on Mars', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let yearsLeft = test.GetLifeMars();
    expect(yearsLeft).toEqual(24);
  });

  it('should test whether it will return age in Jupiter years', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let testBirthday = test.birthday;
    let jupiterAge = test.GetJupiterAge(testBirthday);
    expect(jupiterAge).toEqual(2);
  });

  it('should test whether it will return correct years left or extra years lived on Jupiter', function() {
    let test = new Galactic(new Date(1992, 5, 2));
    let yearsLeft = test.GetLifeJupiter();
    expect(yearsLeft).toEqual(4);
  });

});
